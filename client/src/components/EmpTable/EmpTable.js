import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Grid from "@material-ui/core/Grid";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import DeleteBtn from "../DeleteBtn";
import API from "../../utils/API";

const styles = theme => ({
  root: {
    width: "auto",
    marginTop: theme.spacing.unit * 10,
    overflowX: "auto",
    textAlign: "center"
  },
  table: {
    minWidth: 200
  }
});

const divStyle = {
  padding: '0px'
};

let id = 0;
function createData(name, phone, email, empId) {
  id += 1;
  return { id, name, phone, email, empId };
}

const delEmp = (empId) => {
  console.log(empId)
  API.deleteEmployee(empId)
    .then(res => res.json(res.data))
    .catch(err => console.log(err.response))
}

function EmpTable(props) {
  const { classes } = props;
  const rows = [];

  props.empArr.map(emp =>
    rows.push(
      createData(`${emp.firstName} ${emp.lastName}`, emp.phone, emp.email, emp._id)
    )
  );

  return (
    <Paper className={classes.root}>
      {/* <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.root}>Name</TableCell>
            <TableCell className={classes.root}>Phone</TableCell>
            <TableCell className={classes.root}>Email</TableCell>
            <TableCell className={classes.root}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody> */}
      {rows.map(row => {
        return (
          // <TableRow key={row.id}>
          //   <TableCell className={classes.root} component="th" scope="row">
          //     {row.name}
          //   </TableCell>
          //   <TableCell className={classes.root} numeric>
          //     {row.phone}
          //   </TableCell>
          //   <TableCell className={classes.root} numeric>
          //     {row.email}
          //   </TableCell>
          <ExpansionPanel style={{ width: "100%" }}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              {row.name}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid item xs={9} sm={8}>
                <Typography style={divStyle} align={'left'}>
                  Phone: {row.phone} <br/>Email: {row.email}
                </Typography>
              </Grid>
              <Grid item xs={3} sm={4}>
                <DeleteBtn
                  valOne={row.empId}
                  valTwo={null}
                  func={delEmp}
                  color={"secondary"}
                >
                  <i className="material-icons">delete_outline</i>
                </DeleteBtn>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          // </TableRow>
        );
      })}
      {/* </TableBody>
      </Table> */}
    </Paper>
  );
}

EmpTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EmpTable);
