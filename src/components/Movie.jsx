export default function Movie({ movie }) {
  return (
    <li className="flex flex-col p-2.5 shadow-md cursor-pointer">
      <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">
        {movie.Title}
      </h2>
      <img src={movie.Poster} alt={movie.Title} className="w-auto h-[360px]" />
    </li>
  );
}
