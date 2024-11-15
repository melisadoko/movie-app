export default function Search({ query, searchQuery }) {
  return (
    <div className="flex justify-end mb-4">
      <input
        placeholder="Search"
        className="p-2 placeholder-blue-900 rounded-md shadow-blue-200 ring-2 ring-blue-300 shadow-lg focus:outline-none"
        type="text"
        value={query}
        onChange={(e) => searchQuery(e.target.value)}
      />
    </div>
  );
}
