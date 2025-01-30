import { Input } from "../../components/Input";
import { Button } from "../../components";
import { DataType } from ".";

interface IProp {
  account: DataType;
  setAccount: React.Dispatch<React.SetStateAction<DataType>>;
  nextpage?: any;
}

export const Account = ({ account, setAccount, nextpage }: IProp) => {
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full p-[26px] flex flex-col gap-6">
        <span className="whitespace-pre-line font-bold text-white leading-[32px] text-[24px]">{"입금을 받을\n계좌 정보를 입력해주세요"}</span>
        <div className="flex flex-col gap-8">
          <Input label="계좌 번호" value={account.bankAccountNumber} inputMode="numeric" onChange={(e) => setAccount((prev) => ({ ...prev, bankAccountNumber: e.target.value }))} />
          <Input label="입금주" value={account.bankAccountOwner} maxLength={4} onChange={(e) => setAccount((prev) => ({ ...prev, bankAccountOwner: e.target.value }))} />
          <Input label="전화 번호" value={account.phoneNumber} maxLength={11} inputMode="numeric" onChange={(e) => setAccount((prev) => ({ ...prev, phoneNumber: e.target.value }))} />
        </div>
      </div>

      <div className="w-full absolute p-[26px] bottom-0">
        <Button className="" onClick={() => nextpage()} size="LARGE" disabled={!(account.phoneNumber.length >= 10 && account.bankAccountNumber && account.bankAccountOwner.match(/^[가-힣]{2,4}$/))}>
          다음
        </Button>
      </div>
    </div>
  );
};
