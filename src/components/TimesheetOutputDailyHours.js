import React, { Component } from 'react';
import '../components/TimesheetOutputDailyHours.css';
import TimesheetOutputDailyHourDecimal from '../components/TimesheetOutputDailyHourDecimal.js';
import TimesheetOutputDailyHourHHMM from '../components/TimesheetOutputDailyHourHHMM.js';

class TimesheetOutputDailyHours extends Component {

  render() {

    return (
      <div className="daily-hours-container">
          <div className="daily-hours-column daily-hours-days">
            <div className="daily-hours-header">&nbsp;</div>
            <div className="daily-hours-cell-day">Monday</div>
            <div className="daily-hours-cell-day">Tuesday</div>
            <div className="daily-hours-cell-day">Wednesday</div>
            <div className="daily-hours-cell-day">Thursday</div>
            <div className="daily-hours-cell-day">Friday</div>
            <div className="daily-hours-cell-day">Saturday</div>
            <div className="daily-hours-cell-day">Sunday</div>
          </div>
          <div className="daily-hours-column">
            <div className="daily-hours-header">HH:MM</div>
              <TimesheetOutputDailyHourHHMM day='Monday' timesheet={this.props.timesheet} rowBG='' />
              <TimesheetOutputDailyHourHHMM day='Tuesday' timesheet={this.props.timesheet} rowBG='-alt' />
              <TimesheetOutputDailyHourHHMM day='Wednesday' timesheet={this.props.timesheet} rowBG='' />
              <TimesheetOutputDailyHourHHMM day='Thursday' timesheet={this.props.timesheet} rowBG='-alt' />
              <TimesheetOutputDailyHourHHMM day='Friday' timesheet={this.props.timesheet} rowBG='' />
              <TimesheetOutputDailyHourHHMM day='Saturday' timesheet={this.props.timesheet} rowBG='-alt' />
              <TimesheetOutputDailyHourHHMM day='Sunday' timesheet={this.props.timesheet} rowBG='' />
          </div>
          <div className="daily-hours-column">
            <div className="daily-hours-header">Decimal</div>
            <TimesheetOutputDailyHourDecimal day='Monday' timesheet={this.props.timesheet} rowBG='' />
            <TimesheetOutputDailyHourDecimal day='Tuesday' timesheet={this.props.timesheet} rowBG='-alt' />
            <TimesheetOutputDailyHourDecimal day='Wednesday' timesheet={this.props.timesheet} rowBG='' />
            <TimesheetOutputDailyHourDecimal day='Thursday' timesheet={this.props.timesheet} rowBG='-alt' />
            <TimesheetOutputDailyHourDecimal day='Friday' timesheet={this.props.timesheet} rowBG='' />
            <TimesheetOutputDailyHourDecimal day='Saturday' timesheet={this.props.timesheet} rowBG='-alt' />
            <TimesheetOutputDailyHourDecimal day='Sunday' timesheet={this.props.timesheet} rowBG='' />
          </div>


      </div>
    );
  }
}

export default TimesheetOutputDailyHours;
