import * as actions from './actions';

const initialState = {
    employeeList: [],
    Employee: {
        firstName:"Admin",
        isAdmin: 3,
        _id:"Admin"
    },
    LoggedInAs: {
        firstName: "Admin",
        _id: "Admin"
    },
    todaysDate: '',
    workingDate: '',
    shiftList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ALL_EMPLOYEES:
            return {
                ...state,
                employeeList: [...action.payload]
            }
        case actions.LOGIN_EMPLOYEE:
            return {
                ...state,
                Employee: action.payload,
                LoggedInAs: action.payload
            }
        case actions.CHANGE_EMPLOYEE:
            return {
                ...state,
                LoggedInAs: action.payload
            }
        case actions.SET_TODAY_DATE:
            return {
                ...state,
                todaysDate: action.payload,
                workingDate: action.payload
            }
        case actions.CHANGE_WORKING_DAY:
            return {
                ...state,
                workingDate: action.payload
            }
        case actions.SHIFT_LIST:
            return {
                ...state,
                shiftList: action.payload
            }
        default:
    }
    return state
}

export default reducer;