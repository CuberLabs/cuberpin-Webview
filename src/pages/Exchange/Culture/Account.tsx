import { Input } from "../../../components/Input";
import { Button } from "../../../components";
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
        <span className="whitespace-pre-line font-bold text-white leading-[32px] text-[24px]">
          {"입금을 받을\n계좌 정보를 입력해주세요"}
        </span>
        <div className="flex flex-col gap-8">
          <Input
            label="계좌 번호"
            value={account.accountNumber}
            inputMode="numeric"
            onChange={(e) => setAccount((prev) => ({ ...prev, accountNumber: e.target.value }))}
          />
          <Input
            label="입금주"
            value={account.accountOwner}
            onChange={(e) => setAccount((prev) => ({ ...prev, accountOwner: e.target.value }))}
          />
        </div>
      </div>

      <div className="w-full absolute p-[26px] bottom-0">
        <Button
          className=""
          onClick={() => nextpage()}
          size="LARGE"
          disabled={!(account.accountNumber && account.accountOwner)}
        >
          다음
        </Button>
      </div>
    </div>
  );
};
