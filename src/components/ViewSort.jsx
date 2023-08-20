import underArrow from "@/assets/underArrow.svg";

function ViewSort({ children }) {
  return (
    <div className="flex gap-1 ml-4">
      <label className="text-black text-xs" htmlFor="sort">
        {children}
      </label>
      <button className="text-black text-xs no-underline" id="sort" name="sort">
        <img src={underArrow} />
      </button>
    </div>
  );
}

export default ViewSort;
