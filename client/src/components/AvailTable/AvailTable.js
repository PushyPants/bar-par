import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: 'auto',
        marginTop: theme.spacing.unit * 10,
        overflowX: 'auto',
        textAlign: 'center'
    },
    table: {
        minWidth: 250
    }
});

let id = 0;
function createData(name, dayOfWeek, unavailStart, unavailEnd) {
    id += 1;
    return { id, name, dayOfWeek, unavailStart, unavailEnd };
}


function AvailTable(props) {
    const { classes } = props;
    const rows = [];
    let thisEmp = props.emp || "Loading";
    
    props.empArr.forEach(e => {
        if(thisEmp === "Loading"){
            e.unavail.map(emp => (
            rows.push(createData(`${e.firstName} ${e.lastName}`, emp.dayOfWeek , emp.unavailStart, emp.unavailEnd))
            ))
        } else if (thisEmp === e._id){
            e.unavail.map(emp => (
                rows.push(createData(`${e.firstName} ${e.lastName}`, emp.dayOfWeek, emp.unavailStart, emp.unavailEnd))
            ))
        }
    })



    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        {(thisEmp === "Loading") ?
                        <TableCell className={classes.root} >Name</TableCell>:null}
                        <TableCell className={classes.root} >Name</TableCell>
                        <TableCell className={classes.root} >Phone</TableCell>
                        <TableCell className={classes.root} >Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => {
                        return (
                            <TableRow key={row.id}>
                                {(thisEmp === "Loading")?
                                <TableCell className={classes.root} numeric>{row.name}</TableCell>:null}
                                <TableCell className={classes.root} component="th" scope="row">
                                    {row.dayOfWeek}
                                </TableCell>
                                <TableCell className={classes.root} numeric>{row.unavailStart}</TableCell>
                                <TableCell className={classes.root} numeric>{row.unavailEnd}</TableCell>
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