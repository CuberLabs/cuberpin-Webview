import { Point } from "../../assets";
import { Button } from "../../components";

export const Success = () => {
  return (
    <div className="w-full h-full flex flex-col items-center pt-20 relative gap-5">
      <span className="font-bold text-[32px] text-white">1000원 당첨!</span>
      <div className="text-[18px] text-white flex flex-col gap-1 items-center font-normal">
        <span>당첨된 금액은</span>
        <span className="text-[#3E83EB] after:text-white after:content-['_볼_수_있어요']">
          쿠버핀 계정을 만들면
        </span>
        <Point className="mt-28" />
      </div>
      <div className="w-full absolute px-[26px] bottom-[26px]">
        <Button className="" onClick={() => postMessage({ type: "back" })} size="LARGE">
          상품권 확인하기
        </Button>
      </div>
    </div>
  );
};
