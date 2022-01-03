import React, { useEffect, useState } from "react";
import instance from "../axios";
import "../Constants/cssStyles.css";
import { colors, styles, useWindowDimensions } from "../Constants/styles";

function MovieDetail() {
  const { width, height } = useWindowDimensions();

  const imageUrl = "https://image.tmdb.org/t/p/original/";
  const [movieData, setMovieData] = useState([]);
  const [cast, setCast] = useState();
  const [loading, setLoading] = useState(true);
  const id = localStorage.getItem("id");
  //   console.log(id);
  useEffect(() => {
    const fetchMovie = async () => {
      await instance
        .get(`/movie/${id}?api_key=1bbd459c320f161b8dee93104cf1740e`)
        .then((response) => {
          // console.log(response.data);
          setMovieData(response.data);
          setLoading(false);
        });
      await instance
        .get(`/movie/${id}/credits?api_key=1bbd459c320f161b8dee93104cf1740e`)
        .then((response) => {
          console.log(response.data);
          setCast(response.data);
          console.log(cast);
          setLoading(false);
        });
    };
    fetchMovie();
  }, [id]);

  return (
    <div
      style={{ ...styles.detailParentDiv, height: "100%" }}
      className="detail_parent_div"
    >
      {loading ? (
        <a className="text">Loading</a>
      ) : (
        <>
          <div className="detail_poster">
            <img
              src={`${imageUrl}${movieData.backdrop_path}`}
              className="detail_movie_poster"
            />
            {/* <div
              style={{
                position: "absolute",
                padding: 20,
                top: width > 850 ? "310px" : width / 2.74,
              }}
            > */}
            <a
              className="poster_name"
              style={{
                fontWeight: "500",
                marginBottom: 20,
                fontSize: width > 850 ? 50 : width / 20,
                zIndex: 40,
                textShadow: 10,
                maxWidth: 600,
                position: "relative",
                bottom: width > 850 ? "300px" : width / 3.15,
                left: width > 850 ? "50px" : width / 17,
              }}
            >
              {movieData.original_title}
            </a>

            {/* </div> */}
            <div
              className="detail_poster_fade"
              style={{
                height: width > 850 ? "200px" : width / 4,
                //  top: width > 850 ? "310px" : width / 2.74,
                position: "relative",
                bottom: width > 850 ? "270px" : width / 3.15,
              }}
            ></div>
            <div
              style={{
                padding: 20,
                marginTop: width > 850 ? "-250px" : -width / 3.6,
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
              <div style={{ marginTop: 20 }}>
                <a
                  className="text"
                  style={{
                    fontSize: 20,
                    color: colors.primary,
                    fontWeight: "bold",
                  }}
                >
                  Genres :{" "}
                </a>
                {movieData.genres.map((item) => {
                  return (
                    <a
                      className="text"
                      style={{ fontSize: 20, marginRight: 3 }}
                    >
                      {item.name},
                    </a>
                  );
                })}
              </div>
              <div style={{ marginTop: 20 }}>
                <a
                  className="text"
                  style={{
                    fontSize: 20,
                    color: colors.primary,
                    fontWeight: "bold",
                  }}
                >
                  Cast :{" "}
                </a>
                {/* {cast.map((item) => {
                  return (
                    <a
                      className="text"
                      style={{ fontSize: 20, marginRight: 3 }}
                    >
                      {item.name},
                    </a>
                  );
                })} */}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetail;
