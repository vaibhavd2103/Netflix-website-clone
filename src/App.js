import logo from "./logo.svg";
import "./App.css";
import react, { useState, useEffect } from "react";
import axios from "axios";
import AppRouter from "./Components/AppRouter";
import { Route, Link, BrowserRouter, Switch, Routes } from "react-router-dom";
import Splash from "./Screens/Splash";
import Authentication from "./Screens/Authentication";
import Home from "./Screens/Home";

function App() {
  const [movies, setMovies] = useState([]);
  //   useEffect(() => {
  //     axios.get("https://api.tvmaze.com/shows").then((response) => {
  //       setMovies(response.data);
  //       console.table(response.data);
  //     });
  //   }, []);
  return (
    //     <Routes>
    //       <Route path="/" element={<Splash />} />
    //     </Routes>
    <Home />
  );
}

export default App;

//     <div
//       className="App"
//       style={{
//         display: "flex",
//         padding: 10,
//         alignItems: "center",
//         flexDirection: "column",
//         background: "black",
//       }}
//     >
//       {movies.map((item, i) => {
//         return (
//           <div
//             key={i}
//             style={{
//               display: "flex",
//               width: "100%",
//               alignItems: "center",
//               marginBottom: 10,
//             }}
//           >
//             <img
//               src={item.image.original}
//               style={{
//                 height: "100px",
//                 width: "60px",
//               }}
//             />
//             <a
//               style={{
//                 paddingLeft: 15,
//                 color: "#fff",
//               }}
//             >
//               {item.name}
//             </a>
//           </div>
//         );
//       })}
//     </div>
