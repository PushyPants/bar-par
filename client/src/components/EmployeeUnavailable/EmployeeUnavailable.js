import React from "react";

const EmployeeUnavailable = props => {
    let allEmp = props.allEmp;
    let {dayOfWeek, unavailStart, unavailEnd, Employee} = props.AvailId
    let thisEmp = allEmp.filter(id => id._id === Employee);

    return (
    <React.Fragment>
        {thisEmp[0].firstName} {thisEmp[0].lastName} Unavailable from: {dayOfWeek} {unavailStart} to: {unavailEnd} 
    </React.Fragment>
)}

export default EmployeeUnavailable;

