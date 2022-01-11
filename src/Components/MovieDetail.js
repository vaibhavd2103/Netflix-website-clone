import { isElementType } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import instance from "../axios";
import "../Constants/cssStyles.css";
import { colors, styles, useWindowDimensions } from "../Constants/styles";

function MovieDetail() {
  const { width, height } = useWindowDimensions();

  const imageUrl = "https://image.tmdb.org/t/p/original/";
  const [movieData, setMovieData] = useState([]);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
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
          // console.log(response.data.cast);
          setCast(response.data.cast);
          setLoading(false);
        });
      await instance
        .get(`/movie/${id}/similar?api_key=1bbd459c320f161b8dee93104cf1740e`)
        .then((response) => {
          // console.log(response.data.results);
          setSimilarMovies(response.data.results);
          setLoading(false);
        });
      await instance
        .get(`/movie/${id}/videos?api_key=1bbd459c320f161b8dee93104cf1740e`)
        .then((response) => {
          console.log(response);
          //     setSimilarMovies(response.data.results);
          setLoading(false);
        });
    };
    fetchMovie();
  }, [id]);

  return (
    <div
      style={{
        ...styles.detailParentDiv,
        height: "100%",
        paddingBottom: 0,
        marginBottom: 20,
      }}
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
                bottom: width > 850 ? "267px" : width / 3.15,
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
                      key={item.id}
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
                {cast.map((item, i) => {
                  return (
                    <a
                      className="text"
                      style={{ fontSize: 20, marginRight: 3 }}
                      key={item.id}
                    >
                      {item.original_name},
                    </a>
                  );
                })}
              </div>
              <div
                style={{
                  marginTop: 20,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <a
                  className="text"
                  style={{
                    fontSize: 20,
                    color: colors.primary,
                    fontWeight: "bold",
                  }}
                >
                  More like this :{" "}
                </a>
                <div style={{ display: "block" }}>
                  {similarMovies.map((item, i) => {
                    if (i > 4) {
                      return null;
                    } else
                      return (
                        <div
                          style={{
                            backgroundColor: "#2F2F2F",
                            display: "flex",
                            margin: 5,
                            // width: (width - 40) / 10,
                          }}
                          key={item.id}
                        >
                          <img
                            src={`${imageUrl}${item.poster_path}`}
                            key={item.id}
                            style={{
                              width: (width - 40) / 10,
                              objectFit: "contain",
                            }}
                          />
                          <a className="text" style={{ padding: 10 }}>
                            {item.overview}
                          </a>
                        </div>
                      );
                  })}
                </div>
              </div>
              {/* <video>
                <source src />
              </video> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetail;
