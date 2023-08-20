import { useState } from "react";
import useFetchData from "../hooks/useFecthData";
import MenuNav from "./MenuNav";
import ViewPurchase from "../components/ViewPurchase";
import ViewSort from "../components/ViewSort";
import EpisodeList from "./EpisodeList";

function BookHome() {
  const { data } = useFetchData();
  const [isPurchase, setIsPurchase] = useState(false);

  const handleClickedPurchase = () => {
    setIsPurchase((isPurchase) => !isPurchase);
  };

  return (
    <div className="flex-col ml-1 mb-7 bg-background">
      <MenuNav />
      <div className="px-[0.9375rem] h-[2.75rem] flex justify-between items-center">
        <div className="text-xs text-gray_2">전체 {data.totalEpisode}</div>
        <div className="flex ml-4">
          <ViewPurchase purchase={isPurchase} onclick={handleClickedPurchase}>
            구매한 회차
          </ViewPurchase>
          <ViewSort>첫화부터</ViewSort>
        </div>
      </div>
      <EpisodeList />
    </div>
  );
}

export default BookHome;
