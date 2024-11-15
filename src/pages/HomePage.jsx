import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "../App";
import { BASE_URL } from "../App";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";
import NoMovieFound from "../components/NoMovieFound";
import Search from "../components/Search";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [movieList, setMovieList] = useState([]);

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          if (query !== "") {
            const res = await axios.get(
              `${BASE_URL}/?apiKey=${API_KEY}&s=${query}`
            );
            if (res.data.Response.toLowerCase() === "true")
              setMovieList(res.data.Search.slice(0, 3));
            else setMovieList([]);
          } else setMovieList([]);
        } catch {
          alert("There was a problem loading movie data");
          setMovieList([]);
        }
      }
      fetchMovies();
    },
    [query]
  );

  return (
    <div className="p-4 flex-grow">
      <Search query={query} searchQuery={setQuery} />
      {movieList.length === 0 ? (
        <NoMovieFound />
      ) : (
        <ul className="flex flex-wrap p-10 gap-6 justify-evenly">
          {movieList.map((movie) => (
            <Link to={`details/${movie.imdbID}`} key={movie.imdbID}>
              <Movie movie={movie} />
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
