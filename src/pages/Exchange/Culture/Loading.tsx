import { Culture } from "../../../assets";

export const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center gap-14 flex-col text-center">
      <Culture width={100} height={100} />
      <span className="text-white font-medium text-[24px] whitespace-pre-line">
        {"상품권들을 현금화하고 있어요\n잠시 기다려 주세요"}
      </span>
    </div>
  );
};
