import { Fail as FailIcon } from "../../assets";
import { Button } from "../../components";
import { postMessage } from "../../utils/messageUtil";

export const Fail = () => {
  return (
    <div className="size-full flex flex-col gap-10 items-center justify-center relative text-center">
      <FailIcon />
      <span className="whitespace-pre-line text-white text-[28px] leading-[34px] font-medium">
        {"오답이에요\n출시 년도는 2012년 6월입니다"}
      </span>
      <div className="w-full absolute px-[26px] bottom-[26px]">
        <Button className="" onClick={() => postMessage({ type: "back" })} size="LARGE">
          홈으로 돌아가기
        </Button>
      </div>
    </div>
  );
};
