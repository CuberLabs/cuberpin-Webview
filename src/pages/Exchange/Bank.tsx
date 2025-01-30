import { DataType } from ".";
import {
  Gungmin,
  Shinhan,
  Hana,
  Woori,
  Nonghyup,
  Suhyup,
  KDBIndustrial,
  IBKIndustrial,
  Citi,
  KBank,
  Kakao,
  Daegu,
  Busan,
  Jeonbook,
  Gyeongnam,
  Toss,
  Saemaeul,
  Shinhyup,
  SavingsBank,
  PostOffice,
  Gwangju,
  Jeju,
} from "../../assets/bankLogo";

interface IProp {
  setBank: React.Dispatch<React.SetStateAction<DataType>>;
  nextpage?: any;
}

const banks = [
  {
    name: "KB국민",
    id: "KB_BANK",
    icon: <Gungmin />,
  },
  {
    name: "신한",
    id: "SHINHAN_BANK",
    icon: <Shinhan />,
  },
  {
    name: "하나",
    id: "HANA_BANK",
    icon: <Hana />,
  },
  {
    name: "우리",
    id: "WOORI_BANK",
    icon: <Woori />,
  },
  {
    name: "NH농협",
    id: "NH_BANK",
    icon: <Nonghyup />,
  },
  {
    name: "SH수협",
    id: "SUHYUP_BANK",
    icon: <Suhyup />,
  },
  {
    name: "KDB산업",
    id: "INDUSTRIAL_BANK",
    icon: <KDBIndustrial />,
  },
  {
    name: "IBK기업",
    id: "IBK_BANK",
    icon: <IBKIndustrial />,
  },
  {
    name: "한국씨티",
    id: "CITI_BANK",
    icon: <Citi />,
  },
  {
    name: "케이",
    id: "K_BANK",
    icon: <KBank />,
  },
  {
    name: "카카오",
    id: "KAKAO_BANK",
    icon: <Kakao />,
  },
  {
    name: "토스",
    id: "TOSS_BANK",
    icon: <Toss />,
  },
  {
    name: "새마을",
    id: "SAEMAUL",
    icon: <Saemaeul />,
  },
  {
    name: "신협",
    id: "SINHYUP_BANK",
    icon: <Shinhyup />,
  },
  {
    name: "저축은행",
    id: "SAVINGS_BANK",
    icon: <SavingsBank />,
  },
  {
    name: "우체국",
    id: "POST_OFFICE",
    icon: <PostOffice />,
  },
  {
    name: "DGB대구",
    id: "DGB_BANK",
    icon: <Daegu />,
  },
  {
    name: "BNK부산",
    id: "BNK_BUSAN_BANK",
    icon: <Busan />,
  },
  {
    name: "광주",
    id: "GWANGJU_BANK",
    icon: <Gwangju />,
  },
  {
    name: "제주",
    id: "JEJU_BANK",
    icon: <Jeju />,
  },
  {
    name: "JB전북",
    id: "JB_BANK",
    icon: <Jeonbook />,
  },
  {
    name: "BNK경남",
    id: "BNK_GYEONGNAM_BANK",
    icon: <Gyeongnam />,
  },
];

export const Bank = ({ setBank, nextpage }: IProp) => {
  return (
    <div className="w-full h-full flex flex-col p-[26px] gap-8 overflow-auto">
      <span className="text-[24px] font-bold text-white whitespace-pre-line">{"현금을 지급받을\n은행을 선택해 주세요"}</span>
      <div className="w-full flex-wrap justify-center flex gap-2">
        {banks?.map((i) => (
          <button
            key={i.id}
            className="w-[30%] h-[85px] justify-center flex flex-col gap-2 items-center bg-[#202028] rounded-xl py-2 text-white"
            onClick={() => {
              setBank((prev) => ({ ...prev, bank: i.id }));
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
