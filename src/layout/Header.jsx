import UserProfile from "../components/UserProfile";
import userProfileImage from "@/assets/uniS2.png";
import underArrow from "@/assets/underArrow.svg";
import stage from "@/assets/stage.svg";
import locker from "@/assets/locker.svg";
import gift from "@/assets/gift.svg";
import search from "@/assets/search.svg";

const menu = ["추천", "웹툰", "웹소설", "책", "바로가기"];

function Header() {
  return (
    <div className="mx-auto h-24 max-w-[75rem] flex items-center sticky top-0 bg-[#fff] z-10">
      <h1 className="sr-only">Kakaopage</h1>
      <a href="#">
        <img className="w-24" src="/public/kakaopage.svg" />
      </a>
      <nav className="flex gap-8 items-center pl-[2.625rem] text-black font-bold">
        {menu.map((item, index) => (
          <li
            key={index}
            className="list-none py-1 hover:text-yellow hover:underline hover:underline-offset-4 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </nav>
      <div className="flex absolute right-0 mr-4 gap-6 items-center">
        <form className="box-content w-[10.875rem] h-8 px-3 relative rounded-full border flex">
          <label className="sr-only">검색창</label>
          <input
            className="w-[9.5625rem] text-[0.8125rem]"
            type="search"
            placeholder="제목, 작가를 입력하세요."
          />
          <a
            className="w-6 h-6 absolute right-1 top-1"
            href="#"
            aria-label="검색버튼"
          >
            <img src={search} />
          </a>
        </form>
        <li className="list-none">
          <a href="#">
            <img src={stage} alt="스테이지" />
          </a>
        </li>
        <button>
          <img src={locker} alt="보관함" />
        </button>
        <button>
          <img src={gift} alt="선물" />
        </button>
        <div className="flex">
          <UserProfile profile={userProfileImage} />
          <button className="ml-1">
            <img src={underArrow} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
