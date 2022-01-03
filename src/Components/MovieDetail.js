import React, { useEffect, useState } from "react";
import instance from "../axios";
import "../Constants/cssStyles.css";
import { styles, useWindowDimensions } from "../Constants/styles";

function MovieDetail() {
  const { width, height } = useWindowDimensions();

  const imageUrl = "https://image.tmdb.org/t/p/original/";
  const [movieData, setMovieData] = useState();

  const [loading, setLoading] = useState(true);
  const id = localStorage.getItem("id");
  //   console.log(id);
  useEffect(() => {
    const fetchMovie = async () => {
      await instance
        .get(`/movie/${id}?api_key=1bbd459c320f161b8dee93104cf1740e`)
        .then((response) => {
          console.log(response.data);
          setMovieData(response.data);
          setLoading(false);
          //    console.log(movieData);
        });
      //     localStorage.setItem("data", movieData);
    };
    fetchMovie();
  }, [id]);

  return (
    <div style={styles.detailParentDiv} className="detail_parent_div">
      {loading ? (
        <a className="text">Loading</a>
      ) : (
        <>
          {/* <img
            src={`${imageUrl}${movieData.poster_path}`}
            style={{
              position: "absolute",
              zIndex: 10,
              opacity: 0.1,
              width: "100%",
              maxWidth: 850,
            }}
          /> */}
          <div
            //   style={{
            //     backgroundImage: `url(${imageUrl}${movieData.backdrop_path})`,
            //     width: "100%",
            //     maxWidth: "850px",
            //     height: 300,
            //   }}
            className="detail_poster"
          >
            <div
              className="detail_poster_fade"
              style={{
                height: width > 850 ? "200px" : width / 4,
                top: width > 850 ? "310px" : width / 2.74,
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                padding: 20,
                top: width > 850 ? "310px" : width / 2.74,
              }}
            >
              <a
                className="poster_name"
                style={{
                  fontWeight: "500",
                  marginBottom: 20,
                  fontSize: width > 850 ? 50 : width / 20,
                  zIndex: 40,
                  textShadow: 10,
                  maxWidth: 600,
                }}
              >
                {movieData.original_title}
              </a>
            </div>
            <img
              src={`${imageUrl}${movieData.backdrop_path}`}
              className="detail_movie_poster"
            />
            <div
              style={{
                padding: 20,
              }}
            >
              <a
                className="text"
                style={{
                  fontSize: 20,
                  maxWidth: "50%",
                }}
              >
                {movieData.overview}
              </a>
              <a className="text">Genres</a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetail;
