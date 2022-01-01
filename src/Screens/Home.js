import React, { useState, useEffect } from "react";
import TopNavigator from "../Components/TopNavigator";
import "../Constants/cssStyles.css";
import { colors, styles, useWindowDimensions } from "../Constants/styles";
import instance from "../axios";
import requests from "../requests";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Category from "../Components/Category";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

function Home() {
  const { width, height } = useWindowDimensions();
  const [loading, setLoading] = useState(false);
  const imageUrl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState({});
  const id = Math.floor(Math.random() * 20);
  useEffect(() => {
    const fetchMovies = async () => {
      instance.get(requests.fetchTrending).then((response) => {
        console.log(response.data.results[id]);
        setMovies(response.data.results[id]);
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
            height: "100vh",
            backgroundColor: "#000",
            alignItems: "center",
          }}
        >
          <Loader
            type="Circles"
            color={colors.primary}
            height={40}
            width={40}
          />
        </div>
      ) : (
        <>
          <TopNavigator />
          <div className="home_container">
            <div style={{}}>
              <img
                src={`${imageUrl}${movies.backdrop_path}`}
                className="poster"
              />
              <div
                style={{
                  display: "flex",
                  position: "absolute",
                  top: width / 10,
                  left: 50,
                  backgroundColor: "transparent",
                  height: 500,
                  flexDirection: "column",
                }}
              >
                <a
                  className="poster_name"
                  style={{
                    fontWeight: "500",
                    marginBottom: 20,
                    fontSize: width / 25,
                    zIndex: 100,
                    textShadow: 10,
                    maxWidth: 600,
                  }}
                >
                  {movies.name}
                  {movies.original_title}
                </a>
                <a
                  className="poster_description"
                  style={{
                    fontWeight: "500",
                    marginBottom: 20,
                    fontSize: width / 85,
                    zIndex: 100,
                    textShadow: 20,
                    maxWidth: 600,
                    color: "#fff",
                    width: width / 2,
                    minWidth: 200,
                  }}
                >
                  {movies.overview}
                </a>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    className="play_button"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 5,
                      padding: 10,
                      backgroundColor: "#fff",
                      paddingInline: 20,
                    }}
                  >
                    <FaPlay />
                    <a
                      className="text"
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        marginLeft: 10,
                      }}
                    >
                      Play
                    </a>
                  </div>
                  <div
                    className="play_button"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 5,
                      padding: 10,
                      backgroundColor: "#aaaa",
                      paddingInline: 20,
                      marginLeft: 10,
                    }}
                  >
                    <AiOutlineInfoCircle color="white" size={24} />
                    <a
                      className="text"
                      style={{
                        color: "#fff",
                        fontWeight: "600",
                        marginLeft: 10,
                        textShadow: 0,
                      }}
                    >
                      More Info
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="poster_fade"
                style={{
                  position: "relative",
                  bottom: width / 7,
                  height: width / 7,
                }}
              ></div>
            </div>
            <div
              style={{
                marginTop: -(width / 3.5),
              }}
            >
              {/* <div className="poster_fade"></div> */}

              <Category
                title={"Action Movies"}
                fetchURL={requests.fetchAction}
              />
              <Category title={"Trending"} fetchURL={requests.fetchTrending} />
              <Category title={"Comedies"} fetchURL={requests.fetchComedy} />
              <Category
                title={"Documentaries"}
                fetchURL={requests.fetchDocumentary}
              />
              <Category
                title={"Adventure Movies"}
                fetchURL={requests.fetchAdventure}
              />
              <Category title={"Fantasies"} fetchURL={requests.fetchFantasy} />
              <Category
                title={"Thriller Movies"}
                fetchURL={requests.fetchThriller}
              />
              <Category title={"Drama"} fetchURL={requests.fetchDrama} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;