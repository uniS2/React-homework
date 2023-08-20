import ViewEpisode from "../components/ViewEpisode";
import useFetchData from "../hooks/useFecthData";
import LikeButton from "../components/LikeButton";
import ProfileInfo from "./ProfileInfo";
import inActiveLike from "@/assets/inActiveLike.svg";
import activeLike from "@/assets/activeLike.svg";
import { useEffect, useState } from "react";

function BookProfile() {
  const { data } = useFetchData();
  const [isLike, setIsLike] = useState(inActiveLike);
  const [isLikeCliked, setIsLikeClicked] = useState(false);

  useEffect(() => {
    setIsLike(isLikeCliked ? activeLike : inActiveLike);
  }, [isLikeCliked]);

  const handleToggleLike = () => {
    setIsLikeClicked((prevIsLikeClicked) => !prevIsLikeClicked);
  };

  return (
    <section className="bg-background w-80 h-[37rem] flex flex-col items-center">
      <div className="w-full h-80 flex items-end bg-amber-50 justify-center">
        <img
          className="w-40 h-[229px] object-cover"
          src={data.profile}
          alt="프로필"
        />
      </div>
      <div className="flex flex-col items-center w-64 h-[8.6875rem] py-6 mx-8 box-content">
        <dl>
          <dt className="sr-only">제목</dt>
          <dd className="block text-[21px] font-bold leading-[1.625rem]">
            {data.title}
          </dd>
        </dl>
        <ProfileInfo />
        <div className="flex items-center justify-center mt-1 flex-col">
          <dl className="flex gap-[0.1875rem]">
            <dt className="sr-only">연재상태</dt>
            <dd className="text-xs text-gray_2">{data.status}</dd>
          </dl>
          <dl className="flex gap-[0.1875rem] mt-1">
            <dt className="sr-only">작가</dt>
            <dd className="text-xs text-gray_2">{data.author}</dd>
          </dl>
        </div>
        <LikeButton isLike={isLike} onClick={handleToggleLike} />
      </div>
      <ViewEpisode>무료로 첫편보기</ViewEpisode>
    </section>
  );
}

export default BookProfile;
