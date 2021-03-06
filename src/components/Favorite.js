import React, { useState } from "react";
import axios from "axios";

export function Favorite(props) {
  const { current, title, getFavorite, favorites, display } = props;
  const postFavorite = (date, title) => {
    let bool = true;
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].title === title) bool = false;
    }
    if (bool) {
      axios
        .post("/favorite", { title, date: current })
        .then(function(response) {
          console.log("success");
          getFavorite();
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };

  if (display) {
    return (
      <button
        className="favorite"
        onClick={((date, title) => {
          postFavorite(date, title);
        }).bind(null, current, title)}
      >
        Favorite
      </button>
    );
  } else {
    return <div></div>;
  }
}
