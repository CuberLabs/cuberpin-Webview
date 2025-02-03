import { DataType } from ".";
import { Button } from "../../components";
import { Input } from "../../components/Input";

interface IProp {
  nextpage?: any;
  data: DataType;
  setData: React.Dispatch<React.SetStateAction<DataType>>;
}

export const Name = ({ data, setData, nextpage }: IProp) => {
  return (
    <div className="w-full flex flex-col p-[26px] gap-7 relative">
      <span className="whitespace-pre-line text-white font-bold text-2xl leading-[32px]">이름을 알려주세요</span>
      <Input label="이름" value={data.name} onChange={({ target }) => setData({ ...data, name: target.value })} />
      <div className="w-full absolute p-[26px] -ml-[26px] bottom-0">
        <Button onClick={nextpage} size="LARGE" disabled={!data.name.match(/^[가-힣]{2,4}$/)}>
          다음
        </Button>
      </div>
    </div>
  );
};
