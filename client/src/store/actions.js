import API from '../utils/API';
export const ALL_EMPLOYEES = 'ALL_EMPLOYEES';
export const LOGIN_EMPLOYEE = 'LOGIN_EMPLOYEE';
export const CHANGE_EMPLOYEE = 'CHANGE_EMPLOYEE';
export const SET_TODAY_DATE = "SET_TODAY_DATE";
export const CHANGE_WORKING_DAY = "CHANGE_WORKING_DAY";
export const SHIFT_LIST = "SHIFT_LIST";
export const REMOVE_SHIFT = "REMOVE_SHIFT";

export const setTodaysDate = date => {
    return (dispatch) => {
        dispatch(sendTodaysDateToStore(date))
    }
}
export const changeWorkingDate = date => {
    return (dispatch) => {
        dispatch(changeWorkingDayInStore(date))
    }
}

const sendTodaysDateToStore = (date) => {
    return {
        type: SET_TODAY_DATE,
        payload: date
    }
}
const changeWorkingDayInStore = (date) => {
    return {
        type: CHANGE_WORKING_DAY,
        payload: date
    }
}

const removeShiftFromStore = (shift) => {
    return {
        type: REMOVE_SHIFT,
        payload: shift
    }
}

export const deleteShift = (id) => {
    return (dispatch) => {
        API.deleteShift(id).then(res => {
            dispatch(removeShiftFromStore(res.data))
        }).catch(err => console.log(err))
    }
}

export const LogInEmployee = (id) => {
    return (dispatch) => {
        API.getOneEmployee(id).then(res =>{
            dispatch(sendLoggedInEmployeeToStore(res.data[0]))}
        ).catch(err => console.log(err.response))
    }
}
export const ChangeEmployee = (id) => {
    return (dispatch) => {
        API.getOneEmployee(id).then(res =>{
            dispatch(changeEmployeeInStore(res.data[0]))}
        ).catch(err => console.log(err.response))
    }
}
export const getEmployeeList = () => {
    return (dispatch) => {
        API.getEmployee().then(res =>
            dispatch(sendAllEmployeesToStore(res.data))
        ).catch(err => console.log(err.response))
    }
}
export const getShiftList = () => {
    return (dispatch) => {
        API.getShift().then(res =>
            dispatch(sendShiftsToStore(res.data))
        )
        .then(res => dispatch(getShiftList()))
        .catch(err => console.log(err.response))
    }
}

const sendShiftsToStore = (shift) => {
    return {
        type: SHIFT_LIST,
        payload: shift
    }
}
const sendLoggedInEmployeeToStore = (Employee) => {
    return {
        type: LOGIN_EMPLOYEE,
        payload: Employee
    }
}

const changeEmployeeInStore = (LoggedInAs) => {
    return {
        type: CHANGE_EMPLOYEE,
        payload: LoggedInAs
    }
}

const sendAllEmployeesToStore = (employeeList) => {
    return {
        type: ALL_EMPLOYEES,
        payload: employeeList
    }
}

export const addShift = ({date, dayOfWeek, shiftStart, shiftEnd, Employee }) => {
    return (dispatch) => {
        API.createShift({
            date,
            dayOfWeek,
            shiftStart,
            shiftEnd,
            Employee, 
        })
            .then(res => dispatch(getShiftList()))
            .catch(err => console.log(err));
    }
}

export const addEmployee = ({firstName, lastName, email, phone, password, isAdmin }) => {
    return (dispatch) => {
        API.addEmployee({
            firstName,
            lastName,
            email,
            phone,
            password,
            isAdmin
        })
            .then(res => dispatch(getEmployeeList()))
            .catch(err => console.log(err));
    }
}
export const addAvailability = ({dayOfWeek, availStart, availEnd, Employee }) => {
    return (dispatch) => {
        API.addAvailability({
            dayOfWeek,
            availStart,
            availEnd,
            Employee
        })
            .then(res =>
                API.updateEmployee(res.data.Employee, {avail: res.data._id}))
            .then(res => dispatch(getEmployeeList()))
            .catch(err => console.log(err));
    }
}
export const updateEmployee = (empId, postId) => {
    return (dispatch) => {
        API.updateEmployeeAvail(empId, { avail: postId })
            .then(res => (
                API.deleteAvailability(postId)
            ))
            .then(res => dispatch(getEmployeeList()))
            .catch(err => console.log(err));
    }
}

export const updateAvailability = (availId, dayOfWeek, availStart, availEnd) => {
    return (dispatch) => {
        API.updateAvailability(availId, {
            dayOfWeek,
            availStart,
            availEnd
        })
            .then(res => dispatch(getEmployeeList()))
            .catch(err => console.log(err));
    }
}

export const editShift = ({shiftId, date, dayOfWeek, shiftStart, shiftEnd, Employee}) => {
    return (dispatch) => {
        API.updateShift(shiftId, {
            date,
            dayOfWeek,
            shiftStart,
            shiftEnd,
            Employee
        })
            .then(res => dispatch(getShiftList()))
            .catch(err => console.log(err));
    }
}
            