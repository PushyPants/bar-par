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
        minWidth: 200
    }
});

let id = 0;
function createData(name, phone, email) {
    id += 1;
    return { id, name, phone, email };
}


function EmpTable(props) {
    const { classes } = props;
    const rows = [];
    
    props.empArr.map(emp => (
        rows.push(createData(`${emp.firstName} ${emp.lastName}`, emp.phone, emp.email))
    ))

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.root} >Name</TableCell>
                        <TableCell className={classes.root} >Phone</TableCell>
                        <TableCell className={classes.root} >Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => {
                        return (
                            <TableRow key={row.id}>
                                <TableCell className={classes.root} component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell className={classes.root} numeric>{row.phone}</TableCell>
                                <TableCell className={classes.root} numeric>{row.email}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

EmpTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmpTable);