import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddShiftBtn from "../AddShiftBtn"
import ShiftCard from "../ShiftCard";
import moment from "moment";

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 8,
    },
    column: {
        alignItems: "Right",
        flexBasis: '70%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        flexBasis: '5%',
        minWidth: "70%",
        flexShrink: 0,
    }
});

const convertDate = (date) => {
    let numDay = moment(date).startOf('week')
    let begWeek = numDay._d;
    let wdReadable = moment(begWeek).format('YYYY-MM-DD');
    return wdReadable
}
const addDay = (date, num) => {
    let numDay = moment(date, 'YYYY-MM-DD')
    return numDay.add(num, 'd');
}
const formatDate = (date) => {
    let numday = moment(date, 'YYYY-MM-DD')
    return numday.format('dddd: MMM Do');
}
// const getDay = (date) => {
//     let numday = moment(date, 'YYYY-MM-DD')
//     return numday.format('dddd');
// }
const dayNumber = (date) => {
    let numday = moment(date, 'YYYY-MM-DD')
    return numday.day()
}

function SimpleExpansionPanel(props) {
    const { classes } = props;
    const rows = [];

    let day = "";
    for(let i = 0; i < 7; i++){
        day = convertDate(props.workingDate);
        let newDate = addDay(day, i)._d
        let wdReadable = formatDate(newDate)
        let dayVar = dayNumber(newDate)
        let shifts = [];
        let worksToday = [];

        props.shiftList.forEach(e => {
            if(e.date === wdReadable&&
                props.AdminLevel > 2 ){
                shifts.push(e)
                worksToday.push(e.Employee)
            } else if (e.date === wdReadable &&
                e.Employee === props.Employee) {
                shifts.push(e)
            } 
        })

        rows.push({
            key: i,
            day: wdReadable,
            dayOfWeek: parseInt(dayVar, 10),
            shift: shifts,
            worksToday: worksToday,
        });
    }

    return (
        <React.Fragment>
            {(props.Employee !== "Admin") && (rows[0].day !== "Invalid date") ?
                <div className={classes.root}>
                    {rows.map(row => {
                        return (
                            <ExpansionPanel key={row.key}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>
                                        {row.day}
                                    </Typography>

                                    {(props.AdminLevel > 2)?
                                    <div className={classes.column}>
                                        <AddShiftBtn
                                            thisDay={row.day}
                                            dayOfWeek={row.dayOfWeek}
                                            addShift={props.addShift}
                                            Employee={props.Employee}>
                                            <i className="material-icons">add_circle_outline</i>   
                                        </AddShiftBtn>
                                    </div>
                                    :null}

                                </ExpansionPanelSummary>

                                {row.shift.map(e => 
                                    <ExpansionPanelDetails key={e._id}>
                                        <ShiftCard
                                            shiftId={e._id}
                                            empId={e.Employee}
                                            dayOfWeek={e.dayOfWeek}
                                            shiftStart={parseInt(e.shiftStart, 10)}
                                            shiftEnd={parseInt(e.shiftEnd, 10)}
                                            date={row.day}
                                            worksToday={row.worksToday}
                                            shiftList={props.shiftList}/>
                                    </ExpansionPanelDetails>
                                )}
                            </ExpansionPanel>
                        )
                    })}
                </div>
                : <span className={classes.root}>{props.workingDate}</span>}
        </React.Fragment>
    )
}

SimpleExpansionPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);