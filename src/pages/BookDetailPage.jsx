import useFetchData from "../hooks/useFecthData";
import Spinner from "../components/Spinner";
import BookProfile from "../layout/BookProfile";
import BookHome from "../layout/BookHome";
import BookIntroduction from "../layout/BookIntroduction";

function BookDetailPage() {
  const { isLoading, error } = useFetchData();

  if (isLoading) {
    return <Spinner size={160} />;
  }

  if (error && !(error instanceof DOMException)) {
    return (
      <div role="alert">
        <h2>{error.type}</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <BookProfile />
      <BookHome />
      {/* <BookIntroduction /> */}
    </div>
  );
}

export default BookDetailPage;
