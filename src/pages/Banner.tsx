import { Button } from "../components";
import { postMessage } from "../utils/messageUtil";

export const Banner = () => {
  return (
    <div className="w-full h-full text-center flex flex-col items-center justify-center gap-5 bg-[#2c2c36]">
      <img src="/Controller.png" />
      <span className="text-[#ffffff] font-semibold whitespace-pre-line text-[22px]">
        퀴즈 맞히면{"\n"}문상 최대 5만원
      </span>
      <Button size="SMALL" onClick={() => postMessage({ type: "openWebview", path: "/quiz" })}>
        퀴즈 풀러가기
      </Button>
    </div>
  );
};
