import React, { Component } from 'react';
import '../components/TimesheetOutputSummary.css';
import TimesheetOutputSummaryRegularDecimal from '../components/TimesheetOutputSummaryRegularDecimal.js';
import TimesheetOutputSummaryOTDecimal from '../components/TimesheetOutputSummaryOTDecimal.js';
import TimesheetOutputSummaryTotalDecimal from '../components/TimesheetOutputSummaryTotalDecimal.js';
import TimesheetOutputSummaryRegularHHMM from '../components/TimesheetOutputSummaryRegularHHMM.js';
import TimesheetOutputSummaryOTHHMM from '../components/TimesheetOutputSummaryOTHHMM.js';
import TimesheetOutputSummaryTotalHHMM from '../components/TimesheetOutputSummaryTotalHHMM.js';

class TimesheetOutputSummary extends Component {
  render() {

    return (
      <div className="summary-background">
        <div className="summary-container">
          <div className="summary-column">
            <div className="summary-header"></div>
            <div>HH:MM</div>
            <div>Decimal</div>
          </div>
          <div className="summary-column">
            <div className="summary-header">Regular</div>
            <TimesheetOutputSummaryRegularHHMM timesheet={this.props.timesheet} />
            <TimesheetOutputSummaryRegularDecimal timesheet={this.props.timesheet} />
          </div>
          <div className="summary-column">
            <div className="summary-right-align summary-column-icon summary-header">+</div>
            <div>&nbsp;</div>
            <div className="summary-border-bottom">&nbsp;</div>
          </div>
          <div className="summary-column">
            <div className="summary-header">Overtime</div>
              <TimesheetOutputSummaryOTHHMM timesheet={this.props.timesheet} />
            <TimesheetOutputSummaryOTDecimal timesheet={this.props.timesheet} />
          </div>
          <div className="summary-column">
            <div className="summary-right-align summary-column-icon summary-header">=</div>
            <div>&nbsp;</div>
            <div className="summary-border-bottom">&nbsp;</div>
          </div>
          <div className="summary-column summary-last-column">
            <div className="summary-right-align summary-header">Total</div>
            <TimesheetOutputSummaryTotalHHMM timesheet={this.props.timesheet} />
            <TimesheetOutputSummaryTotalDecimal timesheet={this.props.timesheet} />
          </div>
        </div>
      </div>
    );
  }
}

export default TimesheetOutputSummary;
