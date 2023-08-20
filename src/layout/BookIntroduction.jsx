import useFetchData from "../hooks/useFecthData";

function BookIntroduction() {
  const { data } = useFetchData();

  return (
    <div className="flex-col text-black">
      <div className="py-[1.9375rem]">
        <h2 className="px-8 pb-[0.9375rem] font-bold">작품 소개</h2>
        <div className="w-[35.5rem] px-8 pt-2">{data.detail}</div>
      </div>
      <h2 className="px-8 pb-[0.9375rem] font-bold">동일작</h2>
      <div className="flex gap-2 pb-[0.875rem] w-[39.5rem] h-[15.1875rem] pl-8">
        <dl className="flex-col">
          <dt>[기다무 웹툰] {data.title}</dt>
          <dd className="w-[5.75rem] h-[8.3125rem] border rounded-lg overflow-hidden">
            <img className="h-full" src={data.webtoon} alt="웹툰 표지" />
          </dd>
          <dd>웹툰</dd>
        </dl>
        <dl className="flex-col">
          <dt>[소설] {data.title} (단행본)</dt>
          <dd className="w-[5.75rem] h-[8.3125rem] border rounded-md">
            <img className="h-full" src={data.bookDetail} alt="소설 표지" />
          </dd>
          <dd>{data.type}</dd>
        </dl>
      </div>
    </div>
  );
}

export default BookIntroduction;
