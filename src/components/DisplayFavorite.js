import React, { useState } from "react";
import axios from "axios";

export function DisplayFavorite(props) {
  const { favorites, setCurrent } = props;
  return (
    <div>
      {favorites.map((x, i) => {
        return (
          <div
            key={i}
            onClick={(date => {
              setCurrent(date);
            }).bind(null, x.entries_date)}
          >
            {" "}
            {x.title}{" "}
          </div>
        );
      })}
    </div>
  );
}
