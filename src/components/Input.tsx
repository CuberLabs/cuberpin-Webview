import { useState } from "react";

interface IProp extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
  value: string;
  error?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ label, value, onChange, error, ...rest }: IProp) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <label className={`border-b-2 py-1 ${focus ? "border-[#4593FC]" : "border-white"} ${rest.disabled ? "border-gray-200" : ""} h-fit relative transition-all`}>
        <span className={`${focus && "text-[#4593FC]"} ${focus || value ? "text-[14px] -translate-y-6" : "text-[24px] translate-y-1"} ${!focus && "text-white"}  transition-all  inline-block absolute leading-[24px] ${rest.disabled ? "text-gray-400" : ""}`}>{label}</span>
        <input {...rest} value={value} onChange={onChange} className={`bg-transparent text-white outline-none text-[24px] font-normal leading-[24px] w-full ${rest.disabled ? "text-gray-200" : ""}`} onBlur={() => setFocus(false)} onFocus={() => setFocus(true)} />
      </label>
      {error && <span className="text-[14px] font-normal text-[#F14555] w-fit">{error}</span>}
    </div>
  );
};
