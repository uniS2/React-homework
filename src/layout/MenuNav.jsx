import { useState } from "react";
import BookNavButton from "../components/BookNavButton";

function BookNav() {
  const [isHome, setIsHome] = useState(true);
  const [isIntroduction, setIsIntroduction] = useState(false);
  const [isNofication, setIsNofication] = useState(false);

  const handleSelectHome = () => {
    setIsHome(true);
    setIsIntroduction(false);
    setIsNofication(false);
  };

  const handleSelectIntroduction = () => {
    setIsHome(false);
    setIsIntroduction(true);
    setIsNofication(false);
  };

  const handleSelectNotification = () => {
    setIsHome(false);
    setIsIntroduction(false);
    setIsNofication(true);
  };

  return (
    <div className="flex justify-start gap-2 pt-7 px-[0.9375rem] pb-3">
      <BookNavButton click={isHome} onClick={handleSelectHome}>
        홈
      </BookNavButton>
      <BookNavButton click={isIntroduction} onClick={handleSelectIntroduction}>
        작품소개
      </BookNavButton>
      <BookNavButton click={isNofication} onClick={handleSelectNotification}>
        소식
      </BookNavButton>
    </div>
  );
}

export default BookNav;
