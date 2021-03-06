import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: 'none',
    },
    input: {
        display: 'none',
    },
});

function AddShiftBtn(props, event) {
    const { classes } = props;



    return (
        <Button variant="fab" mini color="primary"
            className={classes.button}
            onClick={(e) => {
                e.stopPropagation();
                props.addShift(props.thisDay, props.dayOfWeek, props.Employee)}
                }>
            {props.children}
        </Button>
    )
}

AddShiftBtn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddShiftBtn);