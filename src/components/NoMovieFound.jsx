import no_movie from "../images/no_movie.png";

export default function NoMovieFound() {
  return (
    <div className="flex flex-col items-center p-16 text-center rounded-lg">
      <img
        src={no_movie}
        alt="Film reel icon"
        className="w-auto h-24 mb-4 opacity-50"
      />
      <h2 className="text-2xl font-bold text-gray-800">No Movies Found</h2>
    </div>
  );
}
