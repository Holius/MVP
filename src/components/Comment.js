import React, { useState } from "react";
import axios from "axios";

export function Comment(props) {
  const { current, convertDateToQuery } = props;
  const [comment, setComment] = useState("A space to write about space.");
  const [allComments, setAllComments] = useState([]);

  const postComment = () => {
    console.log(convertDateToQuery(current));
    axios
      .post("/comment", {
        comment: comment,
        date: convertDateToQuery(current)
      })
      .then(data => {
        console.log("posted comment");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <textarea
        rows="4"
        cols="50"
        name="comment"
        defaultValue="A space to write about space."
        onChange={event => {
          setComment(event.target.value);
        }}
      />

      <input type="submit" value="Post" onClick={postComment} />
    </div>
  );
}
