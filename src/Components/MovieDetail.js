import React, { useEffect, useState } from "react";
import instance from "../axios";
import "../Constants/cssStyles.css";
import { styles } from "../Constants/styles";

function MovieDetail({ item }) {
  const imageUrl = "https://image.tmdb.org/t/p/original/";
  const [movieData, setMovieData] = useState();

  const [loading, setLoading] = useState(true);
  //   console.log(item);

  useEffect(() => {
    const fetchMovie = async (id) => {
      await instance
        .get(`/movie/${id}?api_key=1bbd459c320f161b8dee93104cf1740e`)
        .then((response) => {
          console.log(response.data);
          setMovieData(response.data);
          //    console.log(movieData);
        });
      //     localStorage.setItem("data", movieData);
    };

    fetchMovie();
  }, []);

  return (
    <div style={styles.detailParentDiv} className="detail_parent_div">
      {loading && <a>Loading</a>}
      <>
        <div>
          <div className="detail_poster_fade"></div>
          <img
            src={`${imageUrl}${item.backdrop_path}`}
            className="detail_movie_poster"
          />
        </div>
        <a className="text">Movie detail screen</a>
      </>
    </div>
  );
}

export default MovieDetail;
