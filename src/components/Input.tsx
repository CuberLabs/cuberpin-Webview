import { HTMLAttributes, useState } from "react";

interface IProp extends HTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ label, value, onChange, ...rest }: IProp) => {
  const [focus, setFocus] = useState(false);

  console.log(focus);

  return (
    <label
      className={`border-b-2 py-1 border-white ${
        focus || value ? "border-[#4593FC]" : "border-white"
      } h-fit relative transition-all`}
    >
      <span
        className={`${
          focus || value
            ? "text-[14px] -translate-y-6 text-[#4593FC]"
            : "text-white text-[24px] translate-y-1"
        } transition-all  inline-block absolute leading-[24px]`}
      >
        {label}
      </span>
      <input
        {...rest}
        value={value}
        onChange={onChange}
        className="bg-transparent text-white outline-none text-[24px] font-normal leading-[24px]"
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
      />
    </label>
  );
};
