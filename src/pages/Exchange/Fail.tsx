import { Fail as FailIcon } from "../../assets";
import { Button } from "../../components";
import { postMessage } from "../../utils";

export const Fail = () => {
  return (
    <div className="size-full flex items-center justify-center text-center flex-col gap-16 relative">
      <FailIcon />
      <span className="text-white font-bold text-[20px] flex flex-col gap-2 whitespace-pre-line after:content-['상품권_번호와_만료일자를_다시_확인해_주세요'] after:text-[#A2A1A9] after:text-[15px] ">
        현금화에 실패했어요
      </span>
      <div className="w-full absolute p-[26px] bottom-0">
        <Button className="" onClick={() => postMessage({ type: "back" })} size="LARGE">
          홈으로 돌아가기
        </Button>
      </div>
    </div>
  );
};
