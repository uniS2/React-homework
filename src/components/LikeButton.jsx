function LikeButton({ isLike, onClick }) {
  return (
    <button className="mt-4" onClick={onClick}>
      <img src={isLike} />
    </button>
  );
}

export default LikeButton;
