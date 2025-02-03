import { useEffect, useMemo, useState } from "react";
import { DataType } from ".";
import { Button } from "../../components";
import { useSearchParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { checkVerifyCode, sendVerifyCode } from "../../apis";

interface IProp {
  index?: number;
  nextpage?: any;
  data: DataType;
}

const TIME = 60 * 3;
let timer: number | null = null;

export const Verify = ({ index, data, nextpage }: IProp) => {
  const [searchParams] = useSearchParams();
  const [time, setTime] = useState(TIME);
  const [code, setCode] = useState("");
  const { mutate: send } = useMutation({ mutationFn: () => sendVerifyCode({ phoneNumber: data.phoneNumber, name: data.name }) });
  const { mutate: check, isPending } = useMutation({ mutationFn: () => checkVerifyCode({ phoneNumber: data.phoneNumber, validationCode: code }), onSuccess: nextpage });
  const isCurrent = useMemo(() => (searchParams.get("startByQuiz") === "true" && index === 4) || (searchParams.get("startByQuiz") !== "true" && index === 3), [index]);

  useEffect(() => {
    if (isCurrent) {
      timer = setInterval(() => setTime((prev) => prev - 1), 1000);
      if (time <= 0) clearInterval(timer);
      return () => clearInterval(timer as number);
    } else if (timer) {
      clearInterval(timer);
    }
  }, [time, index]);

  useEffect(() => {
    if (isCurrent) {
      setCode("");
      send();
    }
  }, [index]);

  return (
    <div className="w-full flex flex-col p-[26px] gap-7 relative">
      <span className="whitespace-pre-line text-white font-bold text-2xl leading-[32px]">{"문자로 받은\n인증번호 6자리를 입력해주세요"}</span>
      <span className="text-[#9E9EA4] text-[16px] font-normal">
        남은 시간{" "}
        {Math.floor(time / 60)
          .toString()
          .padStart(2, "0")}
        :{(time % 60).toString().padStart(2, "0")}
      </span>
      <div className="w-full flex justify-center">
        <label className="flex items-center gap-2 relative" htmlFor="code">
          {new Array(6).fill(0).map((_, j) => (
            <span className="w-[51px] h-[62px] flex items-center justify-center bg-[#3C3C47] rounded-xl text-white font-bold text-[20px]">{code[j]}</span>
          ))}
          <input className="absolute h-0 w-0" id="code" value={code} onChange={({ target }) => setCode(target.value)} maxLength={6} />
        </label>
      </div>

      <div className="w-full absolute p-[26px] -ml-[26px] bottom-0 flex flex-col gap-4 items-center">
        {Math.floor(time / 60) < 2 && (
          <span className="text-[#3485FA] font-normal text-[16px] underline" onClick={() => send()}>
            문자가 안 오나요?
          </span>
        )}

        <Button onClick={() => check()} size="LARGE" disabled={code.length !== 6 || isPending}>
          다음
        </Button>
      </div>
    </div>
  );
};
