import { No, Yes } from "../../assets";

interface IProp {
  setPass: React.Dispatch<React.SetStateAction<boolean | null>>;
  nextpage?: any;
}

export const Detail = ({ setPass, nextpage }: IProp) => {
  return (
    <div className="w-full h-full flex flex-col gap-4 p-[26px]">
      <img src="/Controller.png" className="w-fit h-fit" />
      <span className="font-normal text-[16px] text-[#439BFF]">
        맞히면 최대 5만원의 상품권을 받아요.
      </span>
      <span className="whitespace-pre-line font-bold text-[24px] leading-[32px] text-white">
        {"컬쳐랜드 문화상품권\n출시 일자는 2014년 6월이다"}
      </span>
      <div className="mt-[50px] flex gap-3 w-full h-fit">
        <button
          className="w-full h-[168px] bg-[#3E2020] text-white text-lg leading-[30px] font-normal rounded-[20px] flex flex-col justify-center items-center gap-2"
          onClick={() => {
            setPass(false);
            nextpage();
          }}
        >
          <No />
          아니에요
        </button>
        <button
          className="w-full h-[168px] bg-[#222C50] text-white text-lg leading-[30px] font-normal rounded-[20px] flex flex-col justify-center items-center gap-2"
          onClick={() => {
            setPass(true);
            nextpage();
          }}
        >
          <Yes />
          맞아요
        </button>
      </div>
    </div>
  );
};
