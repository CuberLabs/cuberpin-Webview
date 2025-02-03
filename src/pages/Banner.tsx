import { useEffect } from "react";
import { Button } from "../components";
import { postMessage } from "../utils/messageUtil";

const BANNEREXIST = true;
export const Banner = () => {
  useEffect(() => {
    const messageHandler = (event: MessageEvent) => {
      const { type } = JSON.parse(event.data);
      if (type === "checkBanner") {
        postMessage({ type, doesBannerExist: BANNEREXIST });
      }
    };

    document.addEventListener("message", messageHandler as EventListener);
    window.addEventListener("message", messageHandler);
    return () => {
      document.removeEventListener("message", messageHandler as EventListener);
      window.removeEventListener("message", messageHandler);
    };
  }, []);

  return (
    <div className="w-full h-full text-center flex flex-col items-center justify-center gap-5 bg-[#2c2c36]">
      <img src="/Controller.png" />
      <span className="text-[#ffffff] font-semibold whitespace-pre-line text-[22px]">퀴즈 맞히면{"\n"}문상 최대 5만원</span>
      <Button size="SMALL" onClick={() => postMessage({ type: "openWebview", path: "/quiz" })}>
        퀴즈 풀러가기
      </Button>
    </div>
  );
};
