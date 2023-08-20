import useFetchData from "../hooks/useFecthData";
import { getView } from "../utils/getView";
import view from "@/assets/view.svg";
import rate from "@/assets/rate.svg";

function ProfileInfo() {
  const { data } = useFetchData();

  return (
    <div className="flex pt-4">
      <dl className="flex gap-[0.1875rem]">
        <dt className="sr-only">열람자</dt>
        <dd>
          <img src={view} />
        </dd>
        <dd className="text-xs">{getView(data.view)}</dd>
      </dl>
      <span className="text-xs text-gray_2 aria-hidden">ㆍ</span>
      <dl className="flex gap-[0.1875rem]">
        <dt className="sr-only">별점</dt>
        <dd>
          <img src={rate} />
        </dd>
        <dd className="text-xs">{data.rate}</dd>
      </dl>
      <span className="text-xs text-gray_2 aria-hidden">ㆍ</span>
      <dl className="flex gap-[0.1875rem]">
        <dt className="sr-only">분류</dt>
        <dd className="text-xs">{data.type}</dd>
      </dl>
      <span className="text-xs text-gray_2 aria-hidden">ㆍ</span>
      <dl className="flex gap-[0.1875rem]">
        <dt className="sr-only">장르</dt>
        <dd className="text-xs">{data.genre}</dd>
      </dl>
    </div>
  );
}

export default ProfileInfo;
