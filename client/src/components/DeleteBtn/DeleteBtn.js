import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

function DeleteBtn(props) {
    const { classes } = props;



    return (
        <div>
            <Button variant="contained" color="primary" 
                className={classes.button}
                onClick={()=>props.func(props.empID, props.postID)}>
                {props.children}
            </Button>
        </div>
    )
}

DeleteBtn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeleteBtn);