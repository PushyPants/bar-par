import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Divider } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    flex: 1,
    paddingBottom: 3
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexShrink: 0,
    width: '100%'
  },
  barStation: {
    width: '100%',
    margin: 'auto'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  colored: {
    background: "aliceblue",
    textAlign: "center"
  }
});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
        <ExpansionPanel  expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary className={classes.colored} expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}><strong >Main Bar</strong></Typography>
          </ExpansionPanelSummary>
            <Divider/>
          <ExpansionPanelDetails>
            <Typography className={classes.barStation}>
              {this.props.children}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);