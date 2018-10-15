import * as actions from "./actions";

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
    shiftList: [],
    Locations: [],
    Products: [],
    stationInfo: {},
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ALL_PRODUCTS:
            return {
                ...state,
                Products: [...action.payload]
            }
        case actions.SINGLE_STATION:
            return {
                ...state,
                stationInfo: action.payload
            }
        case actions.ALL_LOCATIONS:
            return {
                ...state,
                Locations: [...action.payload]
            }
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
        case actions.REMOVE_SHIFT:
            return {
                ...state,
                shiftList: state.shiftList.filter(shift => shift._id !== action.payload)
            }
        default:
    }
    return state
}

export default reducer;
