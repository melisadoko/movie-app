export default function MovieCard({ movie }) {
  return (
    <div className="p-6 flex flex-col items-center text-center">
      <div className="max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{movie.Title}</h1>
        <div className="flex justify-center mb-6">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="rounded-lg shadow-md w-72 h-auto"
          />
        </div>
        <p className="text-gray-600 mb-4">
          <strong>Plot:</strong> {movie.Plot}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Director:</strong> {movie.Director}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Year:</strong> {movie.Year}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Genre:</strong> {movie.Genre}
        </p>
        <p className="text-gray-700">
          <strong>Actors:</strong> {movie.Actors}
        </p>
      </div>
    </div>
  );
}
