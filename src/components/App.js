import React, { useState, useEffect } from "react";
import axios from "axios";
import { Calendar } from "./Calendar/Calendar";
import { Picture } from "./Picture";
import { SignIn } from "./SignIn";
import { Comment } from "./Comment";

export default function App() {
  const [apod, setApod] = useState(null);
  const [current, setCurrent] = useState(new Date());
  const [allComments, setAllComments] = useState([]);

  const convertDateToQuery = date => {
    let year = `${date.getFullYear()}`,
      month = date.getMonth(),
      day = date.getDate();
    month++;
    month = month < 10 ? `0${month}` : `${month}`;
    day = day < 10 ? `0${day}` : `${day}`;
    return `${year}-${month}-${day}`;
  };

  const getCurrentComments = () => {
    axios
      .get("/comment", { params: { date: convertDateToQuery(current) } })
      .then(function(response) {
        console.log(response.data);
        setAllComments(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  useEffect(() => {
    const getAPOD = async () => {
      const result = await axios(
        `https://api.nasa.gov/planetary/apod?api_key=${
          process.env.REACT_APP_KY
        }&date=${convertDateToQuery(current)}`
      );
      await setApod(result.data);
      console.log(result.data);

      await axios
        .post("/apod", {
          date: result.data.date,
          url: result.data.url,
          description: result.data.explanation,
          title: result.data.title,
          type: result.data.media_type
        })
        .then(function(response) {
          console.log("inserted");
        })
        .catch(function(error) {
          getCurrentComments();
          console.log("no go");
        });
    };

    getAPOD();
  }, [current]);

  return (
    <div>
      <SignIn />
      <Picture apod={apod} />
      <Calendar setCurrent={setCurrent} />
      <Comment
        current={current}
        convertDateToQuery={convertDateToQuery}
        getCurrentComments={getCurrentComments}
        allComments={allComments}
      />
    </div>
  );
}
