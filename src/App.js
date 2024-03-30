import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([
    { 
      id: 1,
      title: "Inception",
      ratings: 5,
    },
    { 
      id: 2,
      title: "Interstellar",
      ratings: 5,
    },
  ]);
  
  const handelClick = () => {
    setMovies(
      movies.map( movie => (movie.id === 1 ? { ...movie, title: "The Dark Knight" } : movie) )
    );
  }
  
  return (
    <>
      { movies.map( movie => (<li key={Math.random()}>{movie.title}</li>) ) }
      <button onClick={handelClick}>Change the name</button>

    </>
  );
}

export default App;