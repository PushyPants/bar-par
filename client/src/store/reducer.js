// Import any actions
import * as actions from './actions';

// Establish an initial state object
const initialState = {
    employeeList: [],
    Employee: {firstName:"Admin"}
}

// Create a reducer function which will accept state and action as arguments.
// Remember you may initialize a default value within your arguments field
const reducer = (state = initialState, action) => {
    // Within your reducer method, write a switch case depending on which action is invoked. Return an updated state value.
    switch (action.type) {
        case actions.ALL_EMPLOYEES:
            return {
                ...state,
                employeeList: [...action.payload]
            }
        case actions.LOGIN_EMPLOYEE:
            return {
                ...state,
                Employee: action.payload
            }
        default:
    }
    return state
}

// Export this reducer
export default reducer;