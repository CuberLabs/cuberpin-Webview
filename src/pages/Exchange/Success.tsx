import { stateType } from ".";
import { Culture } from "../../assets";
import { Button } from "../../components";
import { postMessage } from "../../utils/messageUtil";

interface IProp {
  state: stateType;
}

export const Success = ({ state }: IProp) => {
  return (
    <div className="size-full flex items-center justify-center text-center flex-col gap-16 relative">
      <span className="text-white font-bold text-[24px] whitespace-pre-line before:content-['현금화_완료!'] before:text-[20px] before:text-white flex flex-col gap-3">{state.amount.toLocaleString() + "원이\n현금화 되었어요"}</span>

      <Culture width={100} height={100} />
      <div className="w-full absolute p-[26px] bottom-0">
        <Button className="" onClick={() => postMessage({ type: "back" })} size="LARGE">
          홈으로 돌아가기
        </Button>
      </div>
    </div>
  );
};
