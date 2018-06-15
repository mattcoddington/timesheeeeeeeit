import React, { Component } from 'react';
import '../components/TimesheetOutputDailyHours.css';

class TimesheetOutputDailyHourHHMM extends Component {

  render() {

    const thisDay = this.props.timesheet.filter(val => {
      return val.day === this.props.day;
    });

    const minutesSum = thisDay.map(num => {
      let hoursOut = Math.floor(num.timeOut / 100)
      let hoursIn = Math.floor(num.timeIn / 100)
      let minutesOut = num.timeOut - (hoursOut * 100)
      let minutesIn = num.timeIn - (hoursIn * 100)


      if (hoursOut + minutesOut === hoursIn + minutesIn && hoursOut !== 0 && hoursIn !== 0) {
        return 12
      }

        else if (hoursOut >= hoursIn && minutesOut >= minutesIn) {
        return (hoursOut - hoursIn) + (((minutesOut + (60 - minutesIn)) / 60) - 1);
      }

        else if (hoursOut >= hoursIn && minutesOut < minutesIn) {
        return (hoursOut - hoursIn) + ((minutesOut + (60 - minutesIn)) / 60) - 1;
      }

        else if (hoursOut < hoursIn && minutesIn === minutesOut) {
          return (hoursOut - hoursIn) + 12
      }

        else if (hoursOut < hoursIn && minutesOut > minutesIn) {
          return (hoursOut - hoursIn) + 12 + ((minutesOut + (60 - minutesIn)) / 60) - 1
      }

        else if (hoursOut < hoursIn && minutesIn > minutesOut) {
          return (hoursOut - hoursIn) + 12 + ((minutesOut + (60 - minutesIn)) / 60) - 1
      }

        else {
        return 0
      }
    });

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const totalMinutesNumber = minutesSum.reduce(reducer).toFixed(2)

    let hours = Math.floor(totalMinutesNumber)
    let minutes = totalMinutesNumber - hours

    let convertedTotalMinutesNumber = hours + (minutes * .6)

    const totalMinutes = convertedTotalMinutesNumber.toFixed(2).toString().replace(".", ":")

    return (
            <div className={"daily-hours-row" + this.props.rowBG + " daily-hours-cell"}>

              {(() => {
                if (totalMinutesNumber > 0 && totalMinutesNumber < 24) {
                  return (
                    totalMinutes
                  )
                } else {
                  return (
                    '0:00'
                  )
                }
              })()}

            </div>
    );
  }
}

export default TimesheetOutputDailyHourHHMM;
