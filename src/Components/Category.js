import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import instance from "../axios";
import { colors, styles, useWindowDimensions } from "../Constants/styles";
import { requests } from "../requests";
import "../Constants/cssStyles.css";
// import { API_KEY } from "../requests";

function Category({ title, fetchURL, setDetail }) {
	const { width, height } = useWindowDimensions();
	const [hover, setHover] = useState(false);

	const [loading, setLoading] = useState(true);
	const imageUrl = "https://image.tmdb.org/t/p/original/";

	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchMovies = async () => {
			instance.get(fetchURL).then((response) => {
				//    console.log(response.data.results);
				setMovies(response.data.results);
				setLoading(false);
			});
		};
		fetchMovies();
	}, []);

	//   const fetchMovie = async (id) => {
	//     await instance
	//       .get(`/movie/${id}?api_key=1bbd459c320f161b8dee93104cf1740e`)
	//       .then((response) => {
	//         console.log(response.data);
	//         setMovieData(response.data);
	//         //    console.log(movieData);
	//       });
	//     localStorage.setItem("id", id);
	//   };

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
=======
  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100vw",
            height: "100px",
          }}
        >
          {/* <Loader
>>>>>>> 80465a96d94561c694090acea9a89e7fbb226d81
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
						paddingLeft: 30,
						flexDirection: "column",
					}}
				>
					<a
						className="category_name"
						style={{
							fontWeight: "600",
							fontSize: 20,
							zIndex: 10,
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
							paddingTop: 20,
							paddingBottom: 70,
							paddingLeft: 20,
							width: "100%",
							// overflowX: "scroll",
							zIndex: 20,
						}}
					>
						{movies.map((item, i) => {
							return (
								<div
									onClick={() => {
										// fetchMovie(item.id);
										setDetail(true);
										localStorage.setItem("id", item.id);
									}}
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
