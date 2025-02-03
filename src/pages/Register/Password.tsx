import { useMutation } from "@tanstack/react-query";
import { DataType } from ".";
import { Button } from "../../components";
import { Input } from "../../components/Input";
import { register as registerAPI } from "../../apis";
import { useState } from "react";

interface IProp {
  nextpage?: any;
  data: DataType;
  setData: React.Dispatch<React.SetStateAction<DataType>>;
}

export const Password = ({ data, setData, nextpage }: IProp) => {
  const { mutate: register, isPending } = useMutation({ mutationFn: () => registerAPI({ ...data }), onSuccess: nextpage });
  const [check, setCheck] = useState("");

  return (
    <div className="w-full flex flex-col p-[26px] gap-12 relative">
      <span className="whitespace-pre-line text-white font-bold text-2xl leading-[32px]">비밀번호를 알려주세요</span>
      <Input label="비밀번호" value={data.password} onChange={({ target }) => setData({ ...data, password: target.value })} type="password" />
      <Input label="비밀번호 확인" value={check} onChange={({ target }) => setCheck(target.value)} type="password" />
      <div className="w-full absolute p-[26px] -ml-[26px] bottom-0">
        <Button onClick={() => register()} size="LARGE" disabled={!data.password || isPending || data.password !== check}>
          다음
        </Button>
      </div>
    </div>
  );
};
