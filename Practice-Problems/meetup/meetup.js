'use strict';
/* eslint-disable max-lines-per-function */
// Construct objects that represent a meetup date.

/*
Problem:

  - Each object takes a month number (1-12) and a year (2021)
  - Determine the exact date of the meeting in the specified month and year
  - The given descriptors are strings: 'first', 'second', 'fifth', etc. and
    are not case sensitive.
  - One string choice is 'teenth', which is made up word. There are exactly
    7 days that end in '-teenth', so its guaranteed that each day of the week
    will have exactly one date that is in the 'teenth' of that day in every
    month.
  - The fifth day of the month may not happen every month.
  - Days of the week are given as strings and the case of the strings is not
    important.

*/

class Meetup {
  static DAYS = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];

  static TEENTH = [13, 14, 15, 16, 17, 18, 19];

  constructor(year, month) {
    this.year = year;
    this.month = month;
    this.dates = this.getDates();
  }

  day(weekday, schedule) {
    weekday = weekday.toLowerCase();
    schedule = schedule.toLowerCase();
    let week = this.dates[weekday];
    let day;

    switch (schedule) {
      case 'first':
        day = week[0];
        break;
      case 'second':
        day = week[1];
        break;
      case 'third':
        day = week[2];
        break;
      case 'fourth':
        day = week[3];
        break;
      case 'fifth':
        day = week[4];
        break;
      case 'last':
        day = week[week.length - 1];
        break;
      case 'teenth':
        day = week.find((date) => Meetup.TEENTH.includes(date));
    }

    if (day === undefined) {
      return null;
    }

    return new Date(this.year, this.month - 1, day).toString();
  }

  getDates() {
    let monthOfDates = {
      sunday: [],
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
    };
    let dayIndex = new Date(this.year, this.month, 0).getDate();

    for (let index = 1; index <= dayIndex; index += 1) {
      let currentDayObj = new Date(this.year, this.month - 1, index);
      let currentDayOfWeek = Meetup.DAYS[currentDayObj.getDay()];
      let currentDateOfWeek = currentDayObj.getDate();
      monthOfDates[currentDayOfWeek].push(currentDateOfWeek);
    }

    return monthOfDates;
  }
}

module.exports = Meetup;
