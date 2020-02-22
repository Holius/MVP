import React, { useState, useEffect } from "react";
import { Header } from "./Header";

export function Calendar(props) {
  const { setCurrent } = props;
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());

  //converts first day of the month as an integer into an array of days of the week
  const getFullWeek = (month, year) => {
    let firstDay = new Date(year, month, 1).getDay();
    firstDay--;
    const conversion = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
    let results = [];
    for (let i = 0; i < 7; i++) {
      if (firstDay === 7) firstDay = 0;
      results.push(conversion[firstDay]);
      firstDay++;
    }
    return results.map((x, i) => <th key={i}>{x}</th>);
  };

  const getLastWeek = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateWeekRow = (start, end, month, year) => {
    let results = [];
    for (let i = start; i < end + 1; i++) {
      results.push(
        <td
          onClick={((day, month, year) => {
            setCurrent(new Date(year, month, day));
          }).bind(null, i, month, year)}
          key={i}
        >
          {i}
        </td>
      );
    }
    return results;
  };

  const changeDate = (month, year) => {
    year = month === 12 ? year + 1 : month === -1 ? year - 1 : year;
    month = month === 12 ? 0 : month === -1 ? 11 : month;
    setDate(new Date(year, month));
    setMonth(month);
    setYear(year);
  };

  return (
    <table>
      <thead>
        <Header month={month} year={year} changeDate={changeDate} />
      </thead>
      <thead>
        <tr>{getFullWeek(month, year)}</tr>
      </thead>
      <tbody>
        <tr>{generateWeekRow(1, 7, month, year)}</tr>
        <tr>{generateWeekRow(8, 14, month, year)}</tr>
        <tr>{generateWeekRow(15, 21, month, year)}</tr>
        <tr>{generateWeekRow(22, 28, month, year)}</tr>
        <tr>{generateWeekRow(29, getLastWeek(month, year), month, year)}</tr>
      </tbody>
    </table>
  );
}
