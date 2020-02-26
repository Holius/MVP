import React, { useState, useEffect } from "react";
import axios from "axios";
import { Calendar } from "./Calendar/Calendar";
import { Picture } from "./Picture";
import { SignIn } from "./SignIn";

export default function App() {
  const [apod, setApod] = useState(null);
  const [current, setCurrent] = useState(new Date());

  const convertDateToQuery = date => {
    let year = `${date.getFullYear()}`,
      month = date.getMonth(),
      day = date.getDate();
    month++;
    month = month < 10 ? `0${month}` : `${month}`;
    day = day < 10 ? `0${day}` : `${day}`;
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const getAPOD = async () => {
      const result = await axios(
        `https://api.nasa.gov/planetary/apod?api_key=${
          process.env.REACT_APP_KY
        }&date=${convertDateToQuery(current)}`
      );
      setApod(result.data);
    };

    getAPOD();
  }, [current]);

  return (
    <div>
      <SignIn />
      <Picture apod={apod} />
      <Calendar setCurrent={setCurrent} />
    </div>
  );
}
