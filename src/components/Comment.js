import React, { useState } from "react";
import axios from "axios";

export function Comment(props) {
  const {
    current,
    convertDateToQuery,
    getCurrentComments,
    allComments
  } = props;
  const [comment, setComment] = useState("A space to write about space.");
  const [page, setPage] = useState(1);

  const postComment = () => {
    console.log(convertDateToQuery(current));
    axios
      .post("/comment", {
        comment: comment,
        date: convertDateToQuery(current)
      })
      .then(data => {
        console.log("posted comment");
        getCurrentComments();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const loadComments = start => {
    start--;
    const begin = start * 5;
    const end = begin + 5;
    const results = [];

    allComments.slice(begin, end).map((x, i) => {
      results.push(
        <div key={i}>
          {" "}
          {x.comment} was created on {x.created_on} by {x.users_username}
        </div>
      );
    });
    return results;
  };

  const displayPageNumbers = array => {
    if (array.length < 6) return;
    let length = array.length;
    let pages = 0;
    while (length > 0) {
      length -= 5;
      pages++;
    }
    const results = [];
    for (let i = 0; i < pages; i++) {
      results.push(
        <span
          key={i}
          onClick={(i => {
            setPage(i);
          }).bind(null, i + 1)}
        >
          {i + 1}
        </span>
      );
    }
    return results;
  };

  return (
    <div className="comment">
      <div className="textblock">
        {" "}
        <textarea
          className="textarea"
          name="comment"
          defaultValue="A space to write about space."
          onChange={event => {
            setComment(event.target.value);
          }}
        />
        <button className="post" onClick={postComment}>
          Post{" "}
        </button>
      </div>
      <div className="commentblock"> {loadComments(page)}</div>
      <div className="pages">{displayPageNumbers(allComments)}</div>
    </div>
  );
}
