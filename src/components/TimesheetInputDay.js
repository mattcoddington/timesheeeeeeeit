import React, { Component } from 'react';
import IconPlus from '../images/icon-plus.svg';
import IconMinus from '../images/icon-minus.svg';
import '../components/TimesheetInputDay.css';

class TimesheetInputDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPeriods: 1
    }
  }

  addPeriod = (day, period) => {
    this.setState(prevState => {
       return {totalPeriods: prevState.totalPeriods + 1}
    })
    this.props.addPeriod(day, period);
  }

  removePeriod = (day, period) => {
    this.setState(prevState => {
       return {totalPeriods: prevState.totalPeriods - 1}
    })
    this.props.removePeriod(day, period);
  }

  handleTimeInOnChange = (i, e) => {
    let numbersOnly = e.target.value.replace(/\D/,'')
    this.props.updateTimeIn(this.props.day, i, numbersOnly)
  }

  handleTimeOutOnChange = (i, e) => {
    let numbersOnly = e.target.value.replace(/\D/,'')
    this.props.updateTimeOut(this.props.day, i, numbersOnly)
  }

  render() {

    const thisDay = this.props.timesheet.filter(val => {
      return val.day === this.props.day;
    });

    return (
        <div className="input-row-container">

          {thisDay.map((results, i) =>
            <div key={i}>
              {(() => {
                  return(
                    <div className="timesheet-input-row">
                      <div className="timesheet-day-of-week">
                        {(() => {
                          if (i === 0) {
                            return(
                              this.props.day
                            )
                          } else {
                            return (
                              <span>&nbsp;</span>
                            )
                          }
                        })()}
                      </div>
                      <div><input placeholder="In" value={results.timeIn} onChange={(e) => this.handleTimeInOnChange(i + 1, e)} /></div>
                      <div><input placeholder="Out" value={results.timeOut} onChange={(e) => this.handleTimeOutOnChange(i + 1, e)} /></div>
                      <div className="input-row-icon-cell">
                        {(() => {
                          if (i === this.state.totalPeriods - 1) {
                            return (
                              <div>

                                {(() => {
                                  if (this.state.totalPeriods > 1) {
                                    return(
                                      <span>
                                      <a href="#home" onClick={() => this.removePeriod(this.props.day, i + 1)}><img src={IconMinus} alt="Remove this period" /></a>&nbsp;&nbsp;
                                      </span>
                                    )
                                  }
                                })()}

                                <a href="#home" onClick={() => this.addPeriod(this.props.day, i + 2)}><img src={IconPlus} alt="Add another period" /></a>

                              </div>
                            )
                          } else {
                            return (
                              <a href="#home" onClick={() => this.removePeriod(this.props.day, i + 1)}><img src={IconMinus} alt="Remove this period" /></a>
                            )
                          }
                        })()}
                      </div>
                    </div>
                  )
              })()}
            </div>
          )}

        </div>
    );
  }
}

export default TimesheetInputDay;
