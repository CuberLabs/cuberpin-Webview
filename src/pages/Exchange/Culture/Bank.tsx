import { HanaB, IBKCorp, KakaoB, KBKuk, NHNong, Saemaeul } from "../../../assets";

interface IProp {
  setBank: React.Dispatch<React.SetStateAction<any>>;
  nextpage?: any;
}

const banks = [
  {
    name: "하나",
    id: "HANA",
    icon: <HanaB />,
  },
  {
    name: "IBK기업",
    id: "IBK",
    icon: <IBKCorp />,
  },
  {
    name: "카카오뱅크",
    id: "KAKAO",
    icon: <KakaoB />,
  },
  {
    name: "국민",
    id: "KB",
    icon: <KBKuk />,
  },
  {
    name: "NH농협",
    id: "NHNH",
    icon: <NHNong />,
  },
  {
    name: "새마을",
    id: "SM",
    icon: <Saemaeul />,
  },
];

export const Bank = ({ setBank, nextpage }: IProp) => {
  return (
    <div className="w-full h-full flex flex-col p-[26px] gap-8 overflow-auto">
      <span className="text-[24px] font-bold text-white whitespace-pre-line">
        {"현금을 지급받을\n은행을 선택해 주세요"}
      </span>
      <div className="w-full flex-wrap justify-center flex gap-2">
        {banks?.map((i) => (
          <button
            className="w-[30%] h-[85px] justify-center flex flex-col gap-2 items-center bg-[#202028] rounded-xl py-2 text-white"
            onClick={() => {
              setBank((prev: any) => ({ ...prev, bank: i.id }));
              nextpage();
            }}
          >
            {i.icon}
            {i.name}
          </button>
        ))}
      </div>
    </div>
  );
};
