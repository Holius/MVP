import React, { useState, useEffect } from "react";
import axios from "axios";
import { Calendar } from "./Calendar/Calendar";
import { Picture } from "./Picture";
import { SignIn } from "./SignIn";
import { Comment } from "./Comment";

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
      await setApod(result.data);
      console.log(result.data);
      await axios
        .post("http://localhost:3000/apod", {
          date: result.data.date,
          url: result.data.url,
          description: result.data.explanation,
          title: result.data.title
        })
        .then(function(response) {
          console.log("inserted");
        })
        .catch(function(error) {
          console.log("no go");
          result.status(500).send();
        });

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
    };

    getAPOD();
  }, [current]);

  return (
    <div>
      <SignIn />
      <Picture apod={apod} />
      <Calendar setCurrent={setCurrent} />
      <Comment current={current} convertDateToQuery={convertDateToQuery} />
    </div>
  );
}
