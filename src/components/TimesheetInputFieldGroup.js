import React, { Component } from 'react';
import '../components/TimesheetInputFieldGroup.css';
import TimesheetInputDay from '../components/TimesheetInputDay.js';

class TimesheetInputFieldGroup extends Component {

  render() {
    return (
      <div className="timesheet-field-group-container">

          <TimesheetInputDay day='Monday' addPeriod={this.props.addPeriod} removePeriod={this.props.removePeriod} updateTimeIn={this.props.updateTimeIn} updateTimeOut={this.props.updateTimeOut} timesheet={this.props.timesheet} />
          <TimesheetInputDay day='Tuesday' addPeriod={this.props.addPeriod} removePeriod={this.props.removePeriod} updateTimeIn={this.props.updateTimeIn} updateTimeOut={this.props.updateTimeOut} timesheet={this.props.timesheet} />
          <TimesheetInputDay day='Wednesday' addPeriod={this.props.addPeriod} removePeriod={this.props.removePeriod} updateTimeIn={this.props.updateTimeIn} updateTimeOut={this.props.updateTimeOut} timesheet={this.props.timesheet} />
          <TimesheetInputDay day='Thursday' addPeriod={this.props.addPeriod} removePeriod={this.props.removePeriod} updateTimeIn={this.props.updateTimeIn} updateTimeOut={this.props.updateTimeOut} timesheet={this.props.timesheet} />
          <TimesheetInputDay day='Friday' addPeriod={this.props.addPeriod} removePeriod={this.props.removePeriod} updateTimeIn={this.props.updateTimeIn} updateTimeOut={this.props.updateTimeOut} timesheet={this.props.timesheet} />
          <TimesheetInputDay day='Saturday' addPeriod={this.props.addPeriod} removePeriod={this.props.removePeriod} updateTimeIn={this.props.updateTimeIn} updateTimeOut={this.props.updateTimeOut} timesheet={this.props.timesheet} />
          <TimesheetInputDay day='Sunday' addPeriod={this.props.addPeriod} removePeriod={this.props.removePeriod} updateTimeIn={this.props.updateTimeIn} updateTimeOut={this.props.updateTimeOut} timesheet={this.props.timesheet} />
      </div>
    );
  }
}

export default TimesheetInputFieldGroup;
