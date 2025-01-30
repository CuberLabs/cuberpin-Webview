import { useRef } from "react";

type InputType = {
  sections: number;
  lengthPerSection: number[];
};

interface IProp {
  label: string;
  type: InputType;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Redeem = ({ label, type, value, onChange }: IProp) => {
  const indexes = useRef(type.lengthPerSection.map((_, index) => (index === 0 ? 0 : type.lengthPerSection.slice(0, index).reduce((acc, prev) => acc + prev))));

  return (
    <label className="w-full flex flex-col" htmlFor="code">
      <input
        onChange={(e) => !isNaN(Number(e.target.value)) && onChange(e)}
        id="code"
        inputMode="numeric"
        className="opacity-0 absolute"
        value={value}
        maxLength={type.lengthPerSection.reduce((acc, prev) => acc + prev)}
      />
      <span className="text-[#439BFF] font-normal text-[14px]">{label}</span>
      <div className="w-full flex items-center gap-2">
        {Array.from({ length: type.sections }).map((i, j) => (
          <span
            key={j}
            className={`border-b-[2px] h-[38px] ${
              value.length >= indexes.current[j] && value.length !== 0 ? "border-b-[#4593FC]" : "border-b-white"
            } w-full text-white font-medium text-[24px] text-center`}
          >
            {value?.slice(indexes.current[j], indexes.current[j] + type.lengthPerSection[j])}
          </span>
        ))}
      </div>
    </label>
  );
};
