import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
// import * as actions from '../../store/actions';
// import { Redirect } from 'react-router';
import { connect } from 'react-redux';


const styles = theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    flexGrow: 1,
    height: 440,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

class SwipeableTemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <Link to="/">Landing</Link>
        </List>

        <List>
          <Link to="/home">Home</Link>
        </List>

        {(this.props.Employee.isAdmin < 2) ? null : 
          <List>
            <Link to="/addemp">Add Employee</Link>
          </List>
        }

        <List>
          <Link to="/addavail">Add Availability</Link>
        </List>

        <Divider />
      </div>
    );

    return (
      <div>
        <IconButton className={classes.menuButton} onClick={this.toggleDrawer('left', true)} color="inherit" aria-label="Menu">
            <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    employeeList: state.reducer.employeeList,
    Employee: state.reducer.Employee,
    LoggedInAs: state.reducer.LoggedInAs
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
    // LogInEmployee: (id) => dispatch(actions.LogInEmployee(id)),
    // ChangeEmployee: (id) => dispatch(actions.ChangeEmployee(id)),
    // getEmployeeList: () => dispatch(actions.getEmployeeList()),
    // addAvailability: (availObj) => dispatch(actions.addAvailability(availObj)),
    // updateEmployee: (id, pId) => dispatch(actions.updateEmployee(id, pId)),
    // updateAvailability: (availId, dayOfWeek, unavailStart, unavailEnd) => dispatch(actions.updateAvailability(availId, dayOfWeek, unavailStart, unavailEnd))
//   }
// }

export default connect(mapStateToProps, null)(withStyles(styles)(SwipeableTemporaryDrawer));
