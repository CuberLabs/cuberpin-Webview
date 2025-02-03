import { useMutation } from "@tanstack/react-query";
import { DataType } from ".";
import { Button } from "../../components";
import { Input } from "../../components/Input";
import { login as loginAPI } from "../../apis";
import { useState } from "react";

interface IProp {
  nextpage?: any;
  data: DataType;
  setData: React.Dispatch<React.SetStateAction<DataType>>;
}

export const Password = ({ data, setData, nextpage }: IProp) => {
  const { mutate: login, isPending } = useMutation({
    mutationFn: () => loginAPI(data),
    onSuccess: ({ data }) => {
      postMessage({ type: "saveToken", accessToken: data.accessToken, refreshToken: data.refreshToken });
      nextpage();
    },
    onError: () => setError("전화번호 또는 비밀번호가 잘못되었습니다."),
  });
  const [error, setError] = useState("");

  return (
    <div className="w-full flex flex-col p-[26px] gap-12 relative">
      <span className="whitespace-pre-line text-white font-bold text-2xl leading-[32px]">비밀번호를 알려주세요</span>
      <Input label="비밀번호" error={error} value={data.password} onChange={({ target }) => setData({ ...data, password: target.value })} type="password" />
      <div className="w-full absolute p-[26px] -ml-[26px] bottom-0">
        <Button onClick={() => login()} size="LARGE" disabled={!data.password || isPending}>
          다음
        </Button>
      </div>
    </div>
  );
};
