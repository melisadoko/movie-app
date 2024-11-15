import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../App";
import { BASE_URL } from "../App";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function DetailsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");
  const params = useParams();

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      setError("");

      try {
        const res = await axios.get(
          `${BASE_URL}/?apiKey=${API_KEY}&i=${params.imdbID}`
        );
        setMovie(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieDetails();
  }, [params.imdbID]);

  /*if (isLoading) return <Loading />;
  if (error !== "") return <Error />;

  return (
    <div className="p-6 flex flex-col items-center text-center">
      {movie && <MovieCard movie={movie} />}
    </div>
  );*/
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : error !== "" ? (
        <Error error={error} />
      ) : (
        movie && <MovieCard movie={movie} />
      )}
    </>
  );
}
