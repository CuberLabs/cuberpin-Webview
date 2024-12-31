import { useEffect } from "react";
import { Point } from "../../assets";

export const Loading = ({ nextpage }: any) => {
  useEffect(() => {
    setTimeout(() => {
      nextpage();
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col gap-10 justify-center items-center size-full text-center">
      <Point />
      <span className="text-white leading-[34px] text-[28px] font-medium whitespace-pre-line">
        {"정답이에요!\n어떤 상품권을 받게 될까요?"}
      </span>
    </div>
  );
};
