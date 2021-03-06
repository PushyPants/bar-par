import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const styles = theme => ({
  root: {
    width: "auto",
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    overflowX: "auto",
    textAlign: "center"
  },
  table: {
    minWidth: 200
  }
});

// const divStyle = {
//   padding: "0px"
// };

let id = 0;
function createData(brand, product, par, total, order ) {
  id += 1;
  return { brand, product, total, par, order };
}

function SumTable(props) {
  const { classes } = props;
  const rows = [];


  props.sumArr.map(sum =>
    rows.push(
      createData(
        sum.brand,
        sum.product,
        sum.par,
        sum.total,
      )
    )
  );

 const pluginNumbers =(x)=>{
   console.log('runnning function~')
  x = Math.floor(Math.random()*20);
 return x;
}

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Brand</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Par</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Order</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            let value = pluginNumbers(row.total);

            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.brand}
                </TableCell>
                <TableCell >{row.product}</TableCell>
                <TableCell >{row.par}</TableCell>
                <TableCell >{value}</TableCell>
                <TableCell >Order {row.par - value}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SumTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SumTable);
