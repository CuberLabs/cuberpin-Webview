import { DataType } from ".";
import { Button } from "../../components";
import { Input } from "../../components/Input";

interface IProp {
  nextpage?: any;
  data: DataType;
  setData: React.Dispatch<React.SetStateAction<DataType>>;
}

export const Phone = ({ data, setData, nextpage }: IProp) => {
  return (
    <div className="w-full flex flex-col p-[26px] gap-7 relative">
      <span className="whitespace-pre-line text-white font-bold text-2xl leading-[32px]">휴대폰 번호를 알려주세요</span>
      <Input label="휴대폰 번호" value={data.phoneNumber} onChange={({ target }) => setData({ ...data, phoneNumber: target.value })} />
      <div className="w-full absolute p-[26px] -ml-[26px] bottom-0">
        <Button onClick={nextpage} size="LARGE" disabled={!data.phoneNumber.match(/^01[0-9]\d{7,8}$/)}>
          다음
        </Button>
      </div>
    </div>
  );
};
