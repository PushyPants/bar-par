import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteBtn from "../../../../components/DeleteBtn";
import UpdateAvailSlider from "../UpdateAvailSlider";

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 8,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '15%',
        minWidth: "15%",
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        minWidth: "35%"
    },
});

let convertDay = (val) => {
    switch (val) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return val;
    }
}

const time_convert = num => {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;

    if (minutes === 0) {
        minutes += "0";
    }

    if (hours > 24) {
        hours -= 24;
        return hours + ":" + minutes + "A";
    } else if (hours > 12) {
        hours -= 12;
        return hours + ":" + minutes + "P";
    }

    return hours + ":" + minutes + "A";
};

let key = 0;
let createData = (name, dayOfWeek, availStart, availEnd, postID, empID) => {
    key += 1;
    return { key, name, dayOfWeek, availStart, availEnd, postID, empID };
}

function SimpleExpansionPanel(props) {
    const { classes } = props;
    const rows = [];

    props.empArr.forEach(e => {
        if (props.emp === "Admin") {
            e.avail.map(emp => (
                rows.push(createData(`${e.firstName} ${e.lastName}`,
                    emp.dayOfWeek,
                    emp.availStart,
                    emp.availEnd,
                    emp._id, e._id
                    ))
            ))
        } else if (props.emp === e._id) {
            e.avail.map(emp => (
                rows.push(createData(`${e.firstName} ${e.lastName}`,
                    emp.dayOfWeek,
                    emp.availStart,
                    emp.availEnd,
                    emp._id, e._id
                    ))
            ))
        }
    })

    return (
    <React.Fragment>
        {(props.emp !== "Admin") ?
        <div className={classes.root}>
        {rows.map(row => {
            return(
            <ExpansionPanel key={row.key}>

                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>
                        {convertDay(row.dayOfWeek)}   
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                        From: {time_convert(row.availStart)}   
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                        To: {time_convert(row.availEnd)}   
                    </Typography>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                    <UpdateAvailSlider
                        availId={row.postID}
                        dayOfWeek={row.dayOfWeek}
                        availStart={parseInt(row.availStart, 10)}
                        availEnd={parseInt(row.availEnd,10)}
                        upAvail={props.upAvail}
                        updateTime={props.updateTime}
                        timeCov={time_convert}/>
                    <Typography>
                        <DeleteBtn 
                            valOne={row.empID}
                            valTwo={row.postID}
                            func={props.delAvail}
                            color={"primary"}>
                            Delete
                            </DeleteBtn>
                    </Typography>
                </ExpansionPanelDetails>

            </ExpansionPanel>
            )
        })}
        </div>
        :null}
    </React.Fragment>
    )
}

SimpleExpansionPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);