function BookNavButton({ children, click, onClick }) {
  let style = "";
  if (click) {
    style = {
      color: "#EEEEEE",
      backgroundColor: "#222222",
      fontWeight: 700,
    };
  } else {
    style = {
      color: "#222222",
      backgroundColor: "transparent",
    };
  }

  return (
    <button
      className="inline-block px-[0.875rem] py-[0.4375rem] border border-opacity-10 rounded-2xl text-[13px] leading-[1.125rem] list-none"
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default BookNavButton;
