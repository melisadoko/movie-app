export default function Error({ error }) {
  return (
    <div className="flex items-center justify-center flex-grow bg-gray-100">
      <p className="text-red-500 text-lg font-semibold">Error: {error}</p>
    </div>
  );
}
