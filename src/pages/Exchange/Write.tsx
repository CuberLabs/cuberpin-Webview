import { useState } from "react";
import { Button, Redeem } from "../../components";
import { Trashcan } from "../../assets";
import { DataType, typeTableValueType } from ".";

interface IProp {
  redeems: Array<{ giftCardType: string; giftCode: string }>;
  setRedeems: React.Dispatch<React.SetStateAction<DataType>>;
  type: typeTableValueType;
  nextpage?: any;
}

export const Write = ({ type, nextpage, redeems, setRedeems }: IProp) => {
  const [value, setValue] = useState("");

  return (
    <div className="w-full h-full relative ">
      <div className="w-full flex flex-col p-[26px] gap-7 ">
        <span className="whitespace-pre-line text-white font-bold text-2xl leading-[32px]">{type.name + "\n상품권 번호를 입력하세요"}</span>
        <Redeem type={{ sections: 4, lengthPerSection: [4, 4, 4, 4] }} value={value} onChange={(e) => setValue(e.target.value)} label="번호" />
        <Button
          size="SMALL"
          onClick={() => {
            setRedeems((prev) => ({ ...prev, giftCards: [...prev.giftCards, { giftCardType: "CULTURE", giftCode: value.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/g, "$1-$2-$3-$4") }] }));
            setValue("");
          }}
          disabled={value?.length !== 16}
        >
          추가하기
        </Button>

        <div className="flex flex-col gap-7">
          {redeems?.map((i, j) => (
            <div className="w-full flex justify-between items-center" key={i.giftCode}>
              <div className="flex gap-4 items-center">
                {type.icon}
                <div className="flex flex-col">
                  <span className="text-[14px] font-normal text-[#9E9EA4]">{type.name} 문화상품권</span>
                  <span className="text-white font-semibold text-[18px]">{i.giftCode}</span>
                </div>
              </div>
              <button
                className="w-[34px] h-[34px] flex items-center justify-center bg-[#4D4D59] rounded-[8px]"
                onClick={() =>
                  setRedeems((prev) => ({
                    ...prev,
                    giftCards: prev.giftCards.filter((_: any, index: number) => index !== j),
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
        <Button className="" onClick={nextpage} size="LARGE" disabled={redeems.length === 0}>
          다음
        </Button>
      </div>
    </div>
  );
};
