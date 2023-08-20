function Footer() {
  return (
    <footer className="mx-auto h-[9.375rem] max-w-[58.8125rem] mt-[5.25rem]">
      <ul className="flex gap-4 mb-5">
        <li className="text-sm text-black">
          <a
            href="https://www.kakaoent.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            회사소개
          </a>
        </li>
        <li className="text-sm text-black">
          <a href="#">이용약관</a>
        </li>
        <li className="text-sm text-black font-bold">
          <a
            href="https://kakaoent.com/privacy/policy?service=kakaopage&isTabMode=true&isHeaderMode=false&isFooterMode=false"
            target="_blank"
            rel="noreferrer noopener"
          >
            개인정보처리방침
          </a>
        </li>
        <li className="text-sm text-black">
          <a href="#">청소년보호정책</a>
        </li>
        <li className="text-sm text-black">
          <a href="#">공지사항</a>
        </li>
      </ul>
      <div className="mt-[1.875rem] text-Footer text-[0.8125rem]">
        <div>
          <span>대표자 이진수, 김성수</span>
          <span className="aria-hidden"> | </span>
          <span>호스팅서비스사업자 (주)카카오엔터테인먼트</span>
          <span className="aria-hidden"> | </span>
          <a href="#" className="underline">
            사업자 정보 확인
          </a>
        </div>
        <div>
          <span>사업자 등록 번호 220-88-02594</span>
          <span className="aria-hidden"> | </span>
          <span>통신판매업신고 2018-성남분당B-0004</span>
        </div>
        <div>
          <span>
            대표전화
            <a href="tel:1644-4755" alt="메인 전화번호" className="ml-1">
              1644-4755
            </a>
          </span>
          <span className="aria-hidden"> | </span>
          <span>
            이메일
            <a href="mailto:contact@kakaopage.com" className="ml-1">
              contact@kakaopage.com
            </a>
          </span>
          <span className="aria-hidden"> | </span>
          <address className="inline-block not-italic">
            경기도 성남시 분당구 판교역로 221
          </address>
        </div>
      </div>
      <p className="text-[0.8125rem] text-Footer mt-5">
        &copy; Kakao Entertainment Corp.
      </p>
    </footer>
  );
}

export default Footer;
