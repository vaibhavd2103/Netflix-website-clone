import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import instance from "../axios";
import { colors, styles } from "../Constants/styles";
import requests from "../requests";
import "../Constants/cssStyles.css";

function Category({ title, fetchURL }) {
  const [hover, setHover] = useState(false);

  const [loading, setLoading] = useState(true);
  const imageUrl = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState([]);

  const id = Math.floor(Math.random() * 20);

  useEffect(() => {
    const fetchMovies = async () => {
      instance.get(fetchURL).then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
        setLoading(false);
      });
    };
    fetchMovies();
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100vw",
            height: "200",
          }}
        >
          {/* <Loader
            type="Circles"
            color={colors.primary}
            height={40}
            width={40}
          /> */}
        </div>
      ) : (
        <div
          className="category_div"
          style={{
            display: "flex",
            marginBottom: 40,
            paddingLeft: 30,
            flexDirection: "column",
          }}
        >
          <a
            className="category_name"
            style={{
              fontWeight: "600",
              paddingBottom: 10,
              fontSize: 20,
              zIndex: 100,
              textShadow: 10,
              marginLeft: 20,
            }}
          >
            {title}
          </a>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: 20,
            }}
          >
            {movies.map((item, i) => {
              return (
                <div
                  onMouseOver={() => {
                    setHover(true);
                  }}
                  onMouseOut={() => {
                    setHover(false);
                  }}
                  key={item.id}
                  className="movie_block"
                  style={{
                    ...styles.movieBlock,
                    // scale: hover ? 1.2 : 1,
                    // backgroundColor: hover ? "red" : "#fff0",
                  }}
                >
                  <img
                    src={`${imageUrl}${item.backdrop_path}`}
                    className="category_poster"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Category;
