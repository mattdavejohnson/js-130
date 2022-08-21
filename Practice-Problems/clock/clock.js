/* eslint-disable max-lines-per-function */
// Create a clock that is independent of date.

/*

Problem:
  - Be able to add minutes to and subtract minutes from the time represented
    by a given clock object.
  - Two clock objects that represent the same time should be equal to each
    other.
  - Dont use any built-in date or time functionality.

*/

class Clock {
  constructor(hour, minute) {
    this.hour = hour;
    this.minute = minute;
  }

  static at(hour, minute = 0) {
    return new Clock(hour, minute);
  }

  add(time) {
    let hours = Math.floor(time / 60) + this.hour;
    let minutes = (time % 60) + this.minute;

    if (minutes > 59) {
      this.minute = minutes % 60;
      hours += 1;
    } else {
      this.minute = minutes;
    }

    while (hours > 23) {
      hours -= 24;
    }

    this.hour = hours;

    return this;
  }

  subtract(time) {
    let hours = this.hour - Math.floor(time / 60);
    let minutes = this.minute - (time % 60);

    if (minutes < 0 && this.minute === 0) {
      this.minute = 60 - (time % 60);
      hours -= 1;
    } else {
      this.minute = minutes;
    }

    while (hours < 0) {
      hours += 24;
    }

    this.hour = hours;

    return this;
  }

  isEqual(clockObj) {
    return this.hour === clockObj.hour && this.minute === clockObj.minute;
  }

  toString() {
    let hours = '';
    let minutes = '';

    if (this.hour < 10) {
      hours = '0' + String(this.hour);
    } else {
      hours = String(this.hour);
    }

    if (this.minute < 10) {
      minutes = '0' + String(this.minute);
    } else {
      minutes = String(this.minute);
    }

    return hours + ':' + minutes;
  }
}

module.exports = Clock;
