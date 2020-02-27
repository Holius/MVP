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
      <th
        className="calendar-backward"
        onClick={changeDate.bind(null, month - 1, year)}
      >
        back
      </th>
      <th></th>
      <th></th>
      <th className="calendar-center">
        {" "}
        {`${convertMonthToString(month)} ${year}`}{" "}
      </th>
      <th></th>
      <th></th>
      <th
        className="calendar-forward"
        onClick={changeDate.bind(null, month + 1, year)}
      >
        forward
      </th>
    </tr>
  );
}
