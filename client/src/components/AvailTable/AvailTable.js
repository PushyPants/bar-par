import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteBtn from "../../components/DeleteBtn";

const styles = theme => ({
    root: {
        width: 'auto',
        marginTop: theme.spacing.unit * 10,
        overflowX: 'auto',
        textAlign: 'center'
    },
    table: {
        minWidth: 100
    }
});

let key = 0;

let createData = (name, dayOfWeek, unavailStart, unavailEnd, postID, empID) =>{
    key += 1;
    return { key, name, dayOfWeek, unavailStart, unavailEnd, postID, empID };
}
 
let convertDay = (val) => {
    switch (val) {
        case "1":
            return "Sunday";
        case "2":
            return "Monday";
        case "3":
            return "Tuesday";
        case "4":
            return "Wednesday";
        case "5":
            return "Thursday";
        case "6":
            return "Friday";
        case "7":
            return "Saturday";
        default:
            return val;
    }
}


function AvailTable(props) {
    const { classes } = props;
    const rows = [];
    
    props.empArr.forEach(e => {
        if (props.emp === "Admin"){
            e.unavail.map(emp => (
            rows.push(createData(`${e.firstName} ${e.lastName}`, emp.dayOfWeek , emp.unavailStart, emp.unavailEnd, emp._id, e._id))
            ))
        } else if (props.emp === e._id){
            e.unavail.map(emp => (
                rows.push(createData(`${e.firstName} ${e.lastName}`, emp.dayOfWeek, emp.unavailStart, emp.unavailEnd, emp._id, e._id))
            ))
        }
    })

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        {(props.emp === "Admin") ?
                        <TableCell className={classes.root} >Name</TableCell>:null}
                        <TableCell className={classes.root} >Day</TableCell>
                        <TableCell className={classes.root} >N/A From</TableCell>
                        <TableCell className={classes.root} >N/A To</TableCell>
                        <TableCell className={classes.root} >Remove</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => {
                        return (
                            <TableRow key={row.key}>
                                {(props.emp === "Admin")?
                                <TableCell className={classes.root} numeric>{row.name}</TableCell>:null}
                                <TableCell className={classes.root} component="th" scope="row">
                                    {convertDay(row.dayOfWeek)}
                                </TableCell>
                                <TableCell className={classes.root} numeric>{row.unavailStart}</TableCell>

                                <TableCell className={classes.root} numeric>
                                    {row.unavailEnd}
                                </TableCell>
                                <TableCell className={classes.root} numeric>
                                    <DeleteBtn postID={row.postID}
                                        empID={row.empID}
                                        func={props.delAvail}>
                                        Delete
                                    </DeleteBtn>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

AvailTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AvailTable);