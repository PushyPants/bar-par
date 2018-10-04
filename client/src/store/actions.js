// Import our API variable
// Define any actions
import API from '../utils/API';
// Remember standard action type naming convention is ALL_CAPS_WITH_UNDERSCORE
export const ALL_EMPLOYEES = 'ALL_EMPLOYEES';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
// export const DELETE_BOOK = 'DELETE_BOOK'


// In this file we are able to create asynchronous actions (thanks to thunk) which means we can return methods with dispatch and getState as arguments to call other actions
export const getEmployeeList = () => {
    return (dispatch) => {
        API.getEmployee().then(res =>
            dispatch(sendAllEmployeesToStore(res.data))
        ).catch(err => console.log(err.response))
    }
}

const sendAllEmployeesToStore = (employeeList) => {
    return {
        type: ALL_EMPLOYEES,
        payload: employeeList
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
export const addAvailability = ({dayOfWeek, unavailStart, unavailEnd, Employee }) => {
    return (dispatch) => {
        API.addAvailability({
            dayOfWeek,
            unavailStart,
            unavailEnd,
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

// export const deleteSingleBook = (id) => {
//     return (dispatch) => {
//         API.deleteBook(id)
//             .then(res => {
//                 dispatch(sendDeletedBooksToStore(id))
//                 dispatch(getBooks())
//             })
//             .catch(err => console.log(err));
//     }
// }

// const sendDeletedBooksToStore = (id) => {
//     return {
//         type: DELETE_BOOK,
//         payload: id
//     }
// }

// export const saveBook = ({ title, author, synopsis }) => {
    //     return (dispatch) => {
        //         API.saveBook({
            //             title,
            //             author,
            //             synopsis
            //         })
            //             .then(res => dispatch(getBooks()))
            //             .catch(err => console.log(err));
            //     }
            // }
            