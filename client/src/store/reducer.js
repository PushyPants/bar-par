import * as actions from './actions';

const initialState = {
    employeeList: [],
    Employee: {
        firstName:"Admin",
        _id:"Admin"
    },
    LoggedInAs: {
        firstName: "Admin",
        _id: "Admin"
    }
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
        default:
    }
    return state
}

// Export this reducer
export default reducer;