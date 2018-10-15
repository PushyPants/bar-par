import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import EmployeeDrop from "../../../../components/EmployeeDrop";
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions';
import { Redirect } from 'react-router';
import AddAvailSlider from "../../../Availability/components/AddAvailSilder";
import DeleteBtn from "../../../../components/DeleteBtn";

class ShiftCard extends Component {

    state = ({
        date: "",
        dayOfWeek: "",
        shiftStart: "",
        shiftEnd: "",
        Employee: "",
        shiftId: "",
        worksToday: []
    })

    componentWillMount() {
        this.loadEmployees();
        this.setState({
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

        if (hours >= 24) {
            hours -= 24;
            if (hours === 0) {
              return (`${hours + 12}:${minutes} AM`)
            } else {
              return (`${hours}:${minutes} AM`)
            }
          } else if (hours >= 12) {
            hours -= 12;
            if (hours === 0) {
              return (`${hours + 12}:${minutes} PM`)
            } else {
              return (`${hours}:${minutes} PM`)
            }
          }
    
        return (`${hours}:${minutes} AM`)
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
        this.props.getShiftList()
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

        const result = this.props.employeeList.find(emp => emp._id === Employee);

        this.props.editShift({
            shiftId,
            date,
            dayOfWeek,
            shiftStart,
            shiftEnd,
            Employee: this.checkValidShift(result),
        })

        this.compareShift()
    }

    startAvail = (a, b) => {
        return this.props.employeeList[a].avail[b].availStart
    }
    endAvail = (a, b) => {
        return this.props.employeeList[a].avail[b].availEnd
    }

    checkValidShift = (Employee) => {
        // console.log(Employee)
        if (Employee) {

            for (let i = 0; i < Employee.avail.length; i++) {
                if (this.props.dayOfWeek === Employee.avail[i].dayOfWeek) {
                    
                    if ((this.state.shiftStart > Employee.avail[i].availEnd) ||
                    (this.state.shiftStart < Employee.avail[i].availStart) ||
                    (this.state.shiftEnd > Employee.avail[i].availEnd)
                    ){
                        return null
                    }
                    
                    else {
                        return Employee._id
                    }
                }
            }
        }
    }

    compareShift = () => {
        this.setState({
            worksToday: []
        }, ()=> {
            
            for(let i = 0; i < this.props.employeeList.length; i++){

                for(let j = 0; j < this.props.employeeList[i].avail.length; j++){

                    if (this.props.dayOfWeek === this.props.employeeList[i].avail[j].dayOfWeek){

                        if ((this.state.shiftStart > this.endAvail(i, j)) ||
                            (this.state.shiftStart < this.startAvail(i, j)) ||
                            (this.state.shiftEnd > this.endAvail(i, j))
                        );
                        
                        else {
                            let newArr = this.state.worksToday;
                            if (!newArr.includes(this.props.employeeList[i])){
                                newArr.push(this.props.employeeList[i])
                                this.setState({
                                    worksToday: newArr,
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
