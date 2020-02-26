import React, { useState } from "react";

export function Picture(props) {
  const { apod } = props;
  if (apod === null) {
    return <div>Loading</div>;
  }
  const url = apod.url;
  //   const url = apod.hdurl !== undefined ? apod.hdurl : apod.url;
  const type = apod.media_type;
  const title = apod.title;
  const explanation = apod.explanation;
  const date = apod.date;

  if (type === "image") {
    return (
      <figure>
        <img src={url} style={{ width: "200px", height: "200px" }} />
        <figcaption>{`${date}: ${title}`}</figcaption>
      </figure>
    );
  } else {
    return (
      <figure>
        <iframe src={apod.url}></iframe>
        <figcaption>{`${date}: ${title}`}</figcaption>
      </figure>
    );
  }
}

// {
// date: "2020-02-22", explanation: "A mere 11 million light-years away, Centaurus A is…ay, and gamma-ray energy radiated by Centaurus A.", hdurl: "https://apod.nasa.gov/apod/image/2002/CenA_hst.jpg", media_type: "image", service_version: "v1", …}
// date: "2020-02-22"
// explanation: "A mere 11 million light-years away, Centaurus A is the closest active galaxy to planet Earth. Also known as NGC 5128, the peculiar elliptical galaxy is over 60,000 light-years across. A region spanning about 8,500 light-years, including the galaxy's center (upper left), is framed in this sharp Hubble Space telescope close-up. Centaurus A is apparently the result of a collision of two otherwise normal galaxies resulting in a violent jumble of star forming regions, massive star clusters, and imposing dark dust lanes. Near the galaxy's center, left over cosmic debris is steadily being consumed by a central black hole with a billion times the mass of the Sun. As in other active galaxies, that process likely generates the radio, X-ray, and gamma-ray energy radiated by Centaurus A."
// hdurl: "https://apod.nasa.gov/apod/image/2002/CenA_hst.jpg"
// media_type: "image"
// service_version: "v1"
// title: "Central Centaurus A"
// url: "https://apod.nasa.gov/apod/image/2002/CenA_hst1000.jpg"
// }
