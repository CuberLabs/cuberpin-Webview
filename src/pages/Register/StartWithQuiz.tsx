import { Button } from "../../components";

export const StartWithQuiz = ({ nextpage }: { nextpage?: any }) => {
  return (
    <div className="w-full flex flex-col p-[26px] gap-7 relative">
      <span className="whitespace-pre-line text-white font-bold text-2xl leading-[32px]">{"회원가입 하고\n문화상품권 받아가세요"}</span>
      <div className="w-full flex justify-center">
        <img src="/Gift.png" className="w-fit h-fit" />
      </div>
      <span>이미 계정이 있으신가요?</span>
      <div className="w-full absolute p-[26px] -ml-[26px] bottom-0">
        <Button onClick={nextpage} size="LARGE">
          회원가입 하기
        </Button>
      </div>
    </div>
  );
};
