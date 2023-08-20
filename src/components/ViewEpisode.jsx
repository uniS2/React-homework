function ViewEpisode({ children }) {
  return (
    <button className="bg-yellow px-4 w-48 h-[3.4375rem] rounded-sm box-content text-black font-bold text-xs mt-2 my-8">
      {children}
    </button>
  );
}

export default ViewEpisode;
