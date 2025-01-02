
export default function LoadingSpinner() {
  return (
    <div className="inline-flex items-center">
      <div className="w-4 h-4 rounded-full border-2 border-orange-500 border-t-transparent animate-spin"></div>
      <span className="ml-2">Loading...</span>
    </div>
  );
}