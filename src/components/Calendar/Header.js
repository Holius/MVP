import React, { useState } from "react";

export function Header(props) {
  const { month, year, changeDate } = props;

  const convertMonthToString = num => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    return months[month];
  };

  return (
    <tr>
      <td onClick={changeDate.bind(null, month - 1, year)}>back</td>
      <td> {`${convertMonthToString(month)} ${year}`} </td>
      <td onClick={changeDate.bind(null, month + 1, year)}>forward</td>
    </tr>
  );
}
