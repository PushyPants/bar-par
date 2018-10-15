import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import API from '../../utils/API';




const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});



let id = 0;
function createData(brand, product, total, order ) {
  id += 1;
  return { id, brand, product, total, order };
}

const rows = [
  createData('Deep Eddy', 'GrapeFruit', 6.0, 'yas' ),
 
];

function SimpleTable(props) {
  const { classes } = props;
//make emp Arr 
//then createData is gonna take in callbacks
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Brand</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Order</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.brand}
                </TableCell>
                <TableCell >{row.product}</TableCell>
                <TableCell >{row.total}</TableCell>
                <TableCell >{row.order}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);