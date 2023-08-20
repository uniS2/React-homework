import useFetchData from "../hooks/useFecthData";

function EpisodeListItem({ episodeCount }) {
  const { data } = useFetchData();

  return (
    <li className="box-content list-none px-[0.9375rem] py-2 w-[37.625rem] h-[5.875rem] relative">
      <h2 className="text-black text-sm absolute top-6 ml-[4.875rem]">
        {data.title} {episodeCount}화
      </h2>
      <div className="w-16 h-[5.75rem] border box-content mr-3 float-left rounded-lg overflow-hidden">
        <img className="h-full" src={data.bookDetail} alt="책 표지" />
      </div>
      <span className="text-black absolute top-12 text-xs">{data.date}</span>
      <span className="text-xs text-[#999999] absolute bottom-6">무료</span>
    </li>
  );
}

export default EpisodeListItem;
