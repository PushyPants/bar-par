import React from "react";
import API from "../../utils/API"

const DeleteEmp = ({ row, CustomFunction }) => {

    const deleteEmp = (row) => {
        console.log(row._id)

        
        API.deleteEmployee(row._id)
        // .then(CustomFunction());
    }

    return(
        <button className={`btn delete-btn btn-danger`}
            onClick={()=>deleteEmp(row)}>Delete
        </button>
        )
};

export default DeleteEmp;