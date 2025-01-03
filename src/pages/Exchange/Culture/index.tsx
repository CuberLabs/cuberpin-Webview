import { useState } from "react";
import { Slide } from "../../../components";
import { Write } from "./Write";
import { Bank } from "./Bank";
import { Fail } from "./Fail";
import { Loading } from "./Loading";
import { Success } from "./Success";
import { Account } from "./Account";

export type DataType = {
  redeems: string[];
  bank: string;
  accountNumber: string;
  accountOwner: string;
};

export const Culture = () => {
  const [data, setData] = useState<DataType>({
    redeems: [],
    bank: "",
    accountNumber: "",
    accountOwner: "",
  });

  return (
    <div className="w-full h-full overflow-auto">
      <Slide>
        <Write redeems={data.redeems} setRedeems={setData} />
        <Bank setBank={setData} />
        <Account account={data} setAccount={setData} />
        <Loading />
        <Success />
        <Fail />
      </Slide>
    </div>
  );
};
