import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const styles = {
  container: {
    display: "flex",
    flex: 1,
    width: "100vw",
    height: "100vh",
    flexDirection: "column",
    backgroundColor: "black",
    padding: 0,
  },
  title: {
    color: "white",
  },
  movieBlock: {
    display: "flex",
    flexDirection: "column",
    zIndex: 10,
    marginRight: 5,
    //     height: "100px",
    //     width: "100px",
  },
  posterInfo: {
    display: "flex",
    position: "absolute",
  },
  detailParentDiv: {
    height: "100%",
    width: "100%",
    backgroundColor: "#141414",
    maxWidth: "850px",
    borderRadius: 10,
    overflow: "scroll",
  },
};

const colors = {
  primary: "#D7171E",
};

export { styles, colors, useWindowDimensions };
