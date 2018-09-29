import React from "react";
import API from "../../utils/API"
// import { Col, Row, Container } from "../../components/Grid";
// import { Input, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";

const EmpAvail = ({ row, accessor, CustomFunction }) => {
    let availArr = []
    let index = accessor.split(':');
    index = index[0];
    API.getAvailabilityForId(row[index])
        .then(res => availArr.push(res));

    return (
        <List>
            <ListItem>
                {availArr.forEach(e => (
                    console.log(e)
                ))}
            </ListItem>
        </List>
    )
};

export default EmpAvail;