import React, { Component } from "react";
// import Nav from "../../components/Nav";
import Grid from '@material-ui/core/Grid';
// import ShiftTableExp from "../ShiftTableExp";
import EmployeeDrop from "../EmployeeDrop";
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { Redirect } from 'react-router';
// import DatePickers from "../DatePicker/DatePicker";
import AddAvailSlider from "../AddAvailSilder";
import DeleteBtn from "../../components/DeleteBtn";
// import moment from "moment";

class ShiftCard extends Component {

    state = ({
        date: "",
        dayOfWeek: "",
        shiftStart: "",
        shiftEnd: "",
        Employee: "",
        shiftId: "",
        worksToday: [],
        employeeList: []
    })

    componentWillMount() {
        this.loadEmployees();
        this.setState({
            employeeList: this.props.employeeList,
            dayOfWeek: this.props.dayOfWeek,
            date: this.props.date,
            shiftStart: this.props.shiftStart,
            shiftEnd: this.props.shiftEnd,
            Employee: this.props.empId,
            shiftId: this.props.shiftId
        }, ()=>this.compareShift())
    }

    time_convert = num => {
        let hours = Math.floor(num / 60);
        let minutes = num % 60;

        if (minutes === 0) {
            minutes += "0";
        }

        if (hours > 24) {
            hours -= 24;
            return hours + ":" + minutes + " AM";
        } else if (hours > 12) {
            hours -= 12;
            return hours + ":" + minutes + " PM";
        }

        return hours + ":" + minutes + " AM";
    };

    remove = (array, element) => {
        return array.filter(e => e._id !== element);
    }
    
    loadEmployees = () => {
        this.props.getEmployeeList();
    }

    ChangeEmployee = (event) => {
        this.props.ChangeEmployee(event.target.value);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, ()=>
            this.editShift(
            this.props.shiftId,
            this.state.date,
            this.props.dayOfWeek,
            this.state.shiftStart,
            this.state.shiftEnd,
            this.state.Employee)
            );
    };

    updateShift = val => {
        this.setState({
            shiftStart: val[0],
            shiftEnd: val[1],
        },()=> 
            this.editShift(
            this.props.shiftId,
            this.state.date,
            this.props.dayOfWeek,
            this.state.shiftStart,
            this.state.shiftEnd,
            this.state.Employee)
            );
        }

    editShift = (shiftId, date, dayOfWeek, shiftStart, shiftEnd, Employee)=>{
        this.props.editShift({
            shiftId,
            date,
            dayOfWeek,
            shiftStart,
            shiftEnd,
            Employee,
        })
        this.compareShift()
    }

    unStart = (a, b) => {
        return this.props.employeeList[a].unavail[b].unavailStart
    }
    unEnd = (a, b) => {
        return this.props.employeeList[a].unavail[b].unavailEnd
    }

    compareShift = () => {
        this.setState({
            employeeList: this.props.employeeList,
            worksToday: []
        },  ()=>{
            
            for (let i = 0; i < this.props.employeeList.length; i++) {

            for (let j = 0; j < this.props.employeeList[i].unavail.length; j++) {

                if( //  shift start before avail ends after unavail
                    (this.props.dayOfWeek === this.props.employeeList[i].unavail[j].dayOfWeek) &&
                    (this.state.Employee === this.props.employeeList[i]._id) &&
                    ((this.state.shiftStart < this.unStart(i,j))&& (this.state.shiftEnd > this.unStart(i, j)))
                    ){
                        this.setState({
                            employeeList: this.remove(this.state.employeeList, this.props.employeeList[i]._id),
                            Employee: "default"
                        })
                } 
                
                else if (   //  Shift start during unavail period
                    (this.props.dayOfWeek === this.props.employeeList[i].unavail[j].dayOfWeek) &&
                    (this.state.Employee === this.props.employeeList[i]._id) &&
                    ((this.state.shiftStart > this.unStart(i, j)) && (this.state.shiftStart < this.unEnd(i, j)))
                    ){
                        this.setState({
                            employeeList: this.remove(this.state.employeeList, this.props.employeeList[i]._id),
                            Employee: "default"
                        })
                } 
                
                else if (   //  Shift end during unavail period
                    (this.props.dayOfWeek === this.props.employeeList[i].unavail[j].dayOfWeek) &&
                    (this.state.Employee === this.props.employeeList[i]._id) &&
                    ((this.state.shiftEnd > this.unStart(i, j)) && (this.state.shiftEnd < this.unEnd(i, j)))
                    ){
                        this.setState({
                            employeeList: this.remove(this.state.employeeList, this.props.employeeList[i]._id),
                            Employee: "default"
                        })
                    } 

                else if    //  Shift end during unavail period
                    ((this.props.dayOfWeek === this.props.employeeList[i].unavail[j].dayOfWeek) &&
                    (this.state.Employee === this.props.employeeList[i]._id)){

                        if (!this.state.worksToday.includes(this.props.employeeList[i])){
                                let joined = this.state.worksToday.concat(this.props.employeeList[i])
                                this.setState({
                                    worksToday: joined
                                })
                            }
                        
                        console.log("no")
                        
                    } 
                    
                    // else {
                    //     if (!this.state.worksToday.includes(this.props.employeeList[i])){
                    //             let joined = this.state.worksToday.concat(this.props.employeeList[i])
                    //             this.setState({
                    //                 worksToday: joined
                    //             })
                    //         }
                    // }
            }
        }

        console.log(this.state.worksToday)
    })
    }

    render() {
        return (
            <React.Fragment>
                {(this.props.Employee.isAdmin < 1) ? <Redirect to="/" /> : null}

                <Grid container spacing={8} justify="center">

                    <Grid item xs={2} sm={4}>
                        <span>{this.time_convert(this.state.shiftStart)}</span>
                    </Grid>

                    <Grid item xs={2} sm={4}>
                        <span>{this.time_convert(this.state.shiftEnd)}</span>
                    </Grid>

                    {(this.props.Employee.isAdmin > 2) ? 
                    <React.Fragment>
                        <Grid item xs={8} sm={4}>
                            <EmployeeDrop
                                changeEmp={this.handleInputChange}
                                employeeList={this.state.employeeList}
                                Employee={this.state.Employee} 
                                worksToday={this.props.worksToday}/>
                            
                        </Grid>

                        <Grid item xs={9} sm={8}>
                            <AddAvailSlider
                                start={this.state.shiftStart}
                                end={this.state.shiftEnd}
                                update={this.updateShift}
                                isDisabled={false} />
                        </Grid>

                        <Grid item xs={3} sm={4}>
                            <DeleteBtn
                                valOne={null}
                                valTwo={null}
                                func={null}
                                color={"secondary"}>
                                    <i className="material-icons">
                                    delete_outline</i> 
                            </DeleteBtn>
                        </Grid>
                    </React.Fragment>
                    
                    :
                    <React.Fragment>

                        <Grid item xs={12} sm={8}>
                            <AddAvailSlider
                                start={this.state.shiftStart}
                                end={this.state.shiftEnd}
                                update={this.updateShift}
                                isDisabled={true} />
                        </Grid>

                    </React.Fragment>}

                </Grid>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        employeeList: state.reducer.employeeList,
        Employee: state.reducer.Employee,
        LoggedInAs: state.reducer.LoggedInAs,
        todaysDate: state.reducer.todaysDate,
        workingDate: state.reducer.workingDate,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        LogInEmployee: (id) => dispatch(actions.LogInEmployee(id)),
        editShift: (data) => dispatch(actions.editShift(data)),
        ChangeEmployee: (id) => dispatch(actions.ChangeEmployee(id)),
        setTodaysDate: (data) => dispatch(actions.setTodaysDate(data)),
        changeWorkingDate: (data) => dispatch(actions.changeWorkingDate(data)),
        getEmployeeList: () => dispatch(actions.getEmployeeList()),
        addAvailability: (availObj) => dispatch(actions.addAvailability(availObj)),
        updateEmployee: (id, pId) => dispatch(actions.updateEmployee(id, pId)),
        updateAvailability: (availId, dayOfWeek, unavailStart, unavailEnd) => dispatch(actions.updateAvailability(availId, dayOfWeek, unavailStart, unavailEnd))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShiftCard);
