import { useState } from "react";
import { Slide } from "../../components";
import { Write } from "./Write";
import { Bank } from "./Bank";
import { Fail } from "./Fail";
import { Loading } from "./Loading";
import { Success } from "./Success";
import { Account } from "./Account";
import { useParams } from "react-router-dom";
import { Culture as CultureIcon } from "../../assets";

export type DataType = {
  bank: string;
  bankAccountNumber: string;
  bankAccountOwner: string;
  phoneNumber: string;
  giftCardType?: string;
  giftCards: Array<{ giftCardType: string; giftCode: string }>;
};

type typeTableKeyType = "culture";
export type stateType = { status: boolean; amount: number };
export type typeTableValueType = { id: string; icon: JSX.Element; name: string };
export type typeTableType = Record<typeTableKeyType, typeTableValueType>;

const typeTable: typeTableType = {
  culture: {
    id: "CULTURE",
    icon: <CultureIcon width={48} height={48} />,
    name: "컬처랜드",
  },
};

export const Culture = () => {
  const { id } = useParams();
  const [success, setSuccess] = useState<stateType>({ status: false, amount: 0 });

  const [data, setData] = useState<DataType>({
    bank: "",
    bankAccountNumber: "",
    bankAccountOwner: "",
    phoneNumber: "",
    giftCardType: typeTable[id as typeTableKeyType].id,
    giftCards: [],
  });

  return (
    <div className="w-full h-full overflow-auto">
      <Slide>
        <Write type={typeTable[id as typeTableKeyType]} redeems={data.giftCards} setRedeems={setData} />
        <Bank setBank={setData} />
        <Account account={data} setAccount={setData} />
        <Loading setSuccess={setSuccess} data={data} />
        {success.status ? <Success state={success} /> : <Fail />}
      </Slide>
    </div>
  );
};
