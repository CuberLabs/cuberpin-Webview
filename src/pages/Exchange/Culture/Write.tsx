import { useState } from "react";
import { Button, Redeem } from "../../../components";
import { Culture, Trashcan } from "../../../assets";

interface IProp {
  redeems: string[];
  setRedeems: React.Dispatch<React.SetStateAction<any>>;
  nextpage?: any;
}

export const Write = ({ nextpage, redeems, setRedeems }: IProp) => {
  const [value, setValue] = useState("");

  return (
    <div className="w-full h-full relative">
      <div className="w-full flex flex-col gap-7 p-[26px]">
        <span className="whitespace-pre-line text-white font-bold text-2xl leading-[32px]">
          {"컬처랜드\n상품권 번호를 입력하세요"}
        </span>
        <Redeem
          type={{ sections: 4, lengthPerSection: [4, 4, 4, 6] }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="번호"
        />
        <Button
          size="SMALL"
          onClick={() => {
            setRedeems((prev: any) => ({ ...prev, redeems: [...prev.redeems, value] }));
            setValue("");
          }}
          disabled={value?.length !== 18}
        >
          추가하기
        </Button>

        <div className="flex flex-col gap-7">
          {redeems?.map((i, j) => (
            <div className="w-full flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <Culture width={48} height={48} />
                <div className="flex flex-col">
                  <span className="text-[14px] font-normal text-[#9E9EA4]">
                    컬처랜드 문화상품권
                  </span>
                  <span className="text-white font-semibold text-[18px]">
                    {i.replace(/(\d{4})(\d{4})(\d{4})(\d{6})/g, "$1-$2-$3-$4")}
                  </span>
                </div>
              </div>
              <button
                className="w-[34px] h-[34px] flex items-center justify-center bg-[#4D4D59] rounded-[8px]"
                onClick={() =>
                  setRedeems((prev: any) => ({
                    ...prev,
                    redeems: prev.redeems.filter((_: any, index: number) => index !== j),
                  }))
                }
              >
                <Trashcan />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full absolute p-[26px] bottom-0">
        <Button className="" onClick={nextpage} size="LARGE">
          다음
        </Button>
      </div>
    </div>
  );
};
