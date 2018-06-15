import React, { Component } from 'react';
import './App.css';
import TimesheetInputContainer from './components/TimesheetInputContainer.js';
import TopNavigation from './components/TopNavigation.js';
import TimesheetOutputDailyHours from './components/TimesheetOutputDailyHours.js';
import TimesheetOutputSummary from './components/TimesheetOutputSummary.js';
import Footer from './components/Footer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalTime: 0,
      timesheet: [
        {
          day: 'Monday',
          period: 1,
          timeIn: '',
          timeOut: ''
        },
        {
          day: 'Tuesday',
          period: 1,
          timeIn: '',
          timeOut: ''
        },
        {
          day: 'Wednesday',
          period: 1,
          timeIn: '',
          timeOut: ''
        },
        {
          day: 'Thursday',
          period: 1,
          timeIn: '',
          timeOut: ''
        },
        {
          day: 'Friday',
          period: 1,
          timeIn: '',
          timeOut: ''
        },
        {
          day: 'Saturday',
          period: 1,
          timeIn: '',
          timeOut: ''
        },
        {
          day: 'Sunday',
          period: 1,
          timeIn: '',
          timeOut: ''
        }
      ]
    }
  }

  updateTimeIn = (day, period, timeIn) => {

    const timesheetPreserveTimeOut = this.state.timesheet.filter(item => {
      return (
        item.day === day && item.period === period
      )
    })

    const timesheetFiltered = this.state.timesheet.filter(item => {
      return (
        item.day !== day || item.period !== period
      )
    })

    const newTimeIn = {
      day: day,
      period: period,
      timeIn: timeIn,
      timeOut: timesheetPreserveTimeOut[0].timeOut
    }

    const combinedFilters = timesheetFiltered.concat(newTimeIn)

    combinedFilters.sort(function(a, b) {
      return a.period - b.period
    });

    this.setState({
      timesheet: combinedFilters
    })

  }

  updateTimeOut = (day, period, timeOut) => {

    const timesheetPreserveTimeOut = this.state.timesheet.filter(item => {
      return (
        item.day === day && item.period === period
      )
    })

    const timesheetFiltered = this.state.timesheet.filter(item => {
      return (
        item.day !== day || item.period !== period
      )
    })

    const newTimeIn = {
      day: day,
      period: period,
      timeIn: timesheetPreserveTimeOut[0].timeIn,
      timeOut: timeOut
    }

    const combinedFilters = timesheetFiltered.concat(newTimeIn)

    combinedFilters.sort(function(a, b) {
      return a.period - b.period
    });

    this.setState({
      timesheet: combinedFilters
    })

  }

  addPeriod = (day, period) => {
    this.setState({
      timesheet: [...this.state.timesheet,
        {
          day: day,
          period: period,
          timeIn: '',
          timeOut: ''
        }
      ]
    });
  }

  removePeriod = (day, period) => {

    const timesheetFiltered = this.state.timesheet.filter(item => {

      return (
        item.day !== day ||
        item.period !== period
      )
    });

    const thisDayArrMapped = timesheetFiltered.map(item => {
      if (item.period > period && item.day === day) {
        return (
          {
            day: item.day,
            period: item.period - 1,
            timeIn: item.timeIn,
            timeOut: item.timeOut
          }
        )
      } else {
        return (
          {
            day: item.day,
            period: item.period,
            timeIn: item.timeIn,
            timeOut: item.timeOut
          }
        )
      }
    });

    this.setState({
      timesheet: thisDayArrMapped
    })

  }

  render() {
    return (
      <div>
        <TopNavigation />

        <div className="container-primary">

          <div className="container-timesheet-input">
            <TimesheetInputContainer addPeriod={this.addPeriod} removePeriod={this.removePeriod} updateTimeIn={this.updateTimeIn} updateTimeOut={this.updateTimeOut} timesheet={this.state.timesheet} />
          </div>

          <div className="container-timesheet-output">
            <TimesheetOutputDailyHours timesheet={this.state.timesheet} />
            <TimesheetOutputSummary timesheet={this.state.timesheet} />
          </div>

        </div>
        <Footer />
        Deploy
      </div>
    );
  }
}

export default App;
