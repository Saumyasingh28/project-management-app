export default function Button({ onAddProject, label }) {
  return (
    <button
      onClick={onAddProject}
      className="text-stone-400 px-4 py-2 bg-stone-700 rounded-md text-xs md:text-base hover:bg-stone-600 hover:text-stone-100"
    >
      {label}
    </button>
  );
}
