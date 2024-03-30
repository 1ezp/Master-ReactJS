import { useState } from "react";

function App() {
  const [movie, setMovie] = useState({
    title: "Inception",
    rating: 8.8,
  });
  
  const handelClick = () => {
    const copyMovie = { 
      ...movie,
      rating: 9.3,
    };
    setMovie(copyMovie);
  };

  return (
    <>
      <h1>{movie.title}</h1>
      <p>Rating: {movie.rating}</p>
      <button onClick={handelClick}>change rating</button>

    </>
  );
}

export default App;