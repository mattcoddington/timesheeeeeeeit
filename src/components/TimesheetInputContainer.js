import React, { Component } from 'react';
import '../components/TimesheetInputContainer.css';
import TimesheetInputFieldGroup from '../components/TimesheetInputFieldGroup.js';

class TimesheetInputContainer extends Component {
  render() {
    return (
      <div className="timesheet-input-container">
          <TimesheetInputFieldGroup addPeriod={this.props.addPeriod} removePeriod={this.props.removePeriod} updateTimeIn={this.props.updateTimeIn} updateTimeOut={this.props.updateTimeOut} timesheet={this.props.timesheet} />
      </div>
    );
  }
}

export default TimesheetInputContainer;
