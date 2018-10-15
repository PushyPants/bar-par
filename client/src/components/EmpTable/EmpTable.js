import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, Button } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteBtn from "../DeleteBtn";

import Icon from "@material-ui/core/Icon";

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

const divStyle = {
  padding: "0px"
};

let id = 0;
function createData(name, phone, email, empId) {
  id += 1;
  return { id, name, phone, email, empId };
}

function EmpTable(props) {
  const { classes } = props;
  const rows = [];

  const delEmp = empId => {
    props.deleteEmployee(empId);
  };

  props.empArr.map(emp =>
    rows.push(
      createData(
        `${emp.firstName} ${emp.lastName}`,
        emp.phone,
        emp.email,
        emp._id
      )
    )
  );

  return (
    <Paper className={classes.root}>
      {rows.map(row => {
        return (
          <ExpansionPanel style={{ width: "100%" }} key={row.id}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              {row.name}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid item xs={9} sm={8}>
                <Typography 
                  style={divStyle} align={"left"}>
                  Phone: {row.phone} <br />
                  Email: {row.email}
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
                <Button 
                  disabled
                  color="disabled"
                  aria-label="Edit"

                >
                  <Icon>edit_icon</Icon>
                </Button>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}
    </Paper>
  );
}

EmpTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EmpTable);
