import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import EmployeeDrop from "../../../../components/EmployeeDrop";
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions';
import { Redirect } from 'react-router';
import AddAvailSlider from "../../../Availability/components/AddAvailSilder";
import DeleteBtn from "../../../../components/DeleteBtn";
// import API from "../../utils/API";

class ShiftCard extends Component {

    state = ({
        date: "",
        dayOfWeek: "",
        shiftStart: "",
        shiftEnd: "",
        Employee: "",
        shiftId: "",
        worksToday: [],
        employeeList: [],
        thisDay: []
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

    loadShift = () => {
        this.props.getShiftList();
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

    deleteShift = (id) => {
        this.props.deleteShift(id)
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
        (Employee === 'default')?
            this.props.editShift({
                shiftId,
                date,
                dayOfWeek,
                shiftStart,
                shiftEnd,
                Employee: null,
            })
            :
            this.props.editShift({
                shiftId,
                date,
                dayOfWeek,
                shiftStart,
                shiftEnd,
                Employee,
            });
        this.compareShift()
    }

    startAvail = (a, b) => {
        return this.props.employeeList[a].avail[b].availStart
    }
    endAvail = (a, b) => {
        return this.props.employeeList[a].avail[b].availEnd
    }

    compareShift = () => {
        this.setState({
            employeeList: this.props.employeeList,
            worksToday: [],
            thisDay: []
        }, ()=> {
            
            for(let i = 0; i < this.state.employeeList.length; i++){

                for(let j = 0; j < this.state.employeeList[i].avail.length; j++){

                    if (this.props.dayOfWeek === this.state.employeeList[i].avail[j].dayOfWeek){

                        if ((this.state.shiftStart > this.endAvail(i, j)) ||
                            (this.state.shiftStart < this.startAvail(i, j)) ||
                            (this.state.shiftEnd > this.endAvail(i, j))
                        ); 
                        
                        else {
                            let newArr = this.state.worksToday;

                            if (!newArr.includes(this.state.employeeList[i])){
                                newArr.push(this.state.employeeList[i])
                                this.setState({
                                    worksToday: newArr
                                });
                            }
                        }
                    } 
                }
            }
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
                                employeeList={this.state.worksToday}
                                Employee={(this.state.Employee)?
                                    this.state.Employee:
                                    "default"} 
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
                                valOne={this.props.shiftId}
                                valTwo={null}
                                func={this.deleteShift}
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
        shiftList: state.reducer.shiftList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        LogInEmployee: (id) => dispatch(actions.LogInEmployee(id)),
        getShiftList: () => dispatch(actions.getShiftList()),
        editShift: (data) => dispatch(actions.editShift(data)),
        deleteShift: (data) => dispatch(actions.deleteShift(data)),
        ChangeEmployee: (id) => dispatch(actions.ChangeEmployee(id)),
        setTodaysDate: (data) => dispatch(actions.setTodaysDate(data)),
        changeWorkingDate: (data) => dispatch(actions.changeWorkingDate(data)),
        getEmployeeList: () => dispatch(actions.getEmployeeList()),
        addAvailability: (availObj) => dispatch(actions.addAvailability(availObj)),
        updateEmployee: (id, pId) => dispatch(actions.updateEmployee(id, pId)),
        updateAvailability: (availId, dayOfWeek, availStart, availEnd) => dispatch(actions.updateAvailability(availId, dayOfWeek, availStart, availEnd))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShiftCard);
