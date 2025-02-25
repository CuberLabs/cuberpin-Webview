import { Success as SuccessIcon } from "../../assets";
import { Button } from "../../components";
import { postMessage } from "../../utils";

export const Success = () => {
  return (
    <div className="size-full relative flex items-center justify-center gap-10 flex-col p-[26px]">
      <SuccessIcon />
      <span className="font-medium text-[26px] text-white">로그인 완료!</span>
      <div className="w-full absolute p-[26px] bottom-0">
        <Button onClick={() => postMessage({ type: "back" })} size="LARGE">
          홈으로 가기
        </Button>
      </div>
    </div>
  );
};
