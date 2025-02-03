import { DataType } from ".";
import { Button } from "../../components";
import { Input } from "../../components/Input";

interface IProp {
  nextpage?: any;
  data: DataType;
}

export const Check = ({ data, nextpage }: IProp) => {
  return (
    <div className="w-full flex flex-col p-[26px] gap-12 relative">
      <span className="whitespace-pre-line text-white font-bold text-2xl leading-[32px]">작성하신 정보가 맞나요?</span>
      <Input label="이름" onChange={() => {}} value={data.name} disabled />
      <Input label="휴대폰 번호" onChange={() => {}} value={data.phoneNumber} disabled />
      <div className="w-full absolute p-[26px] -ml-[26px] bottom-0">
        <Button onClick={nextpage} size="LARGE">
          다음
        </Button>
      </div>
    </div>
  );
};
