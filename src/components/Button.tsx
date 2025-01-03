interface IProp extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  size?: keyof typeof SIZES;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const SIZES = {
  LARGE: "w-full h-[60px] text-[18px] rounded-[16px] rounded-2xl",
  SMALL: "w-fit h-fit px-4 py-1 text-[16px] rounded-lg",
};

export const Button = ({ children, size = "LARGE", onClick, ...rest }: IProp) => {
  return (
    <button
      {...rest}
      className={`bg-[#3382F8] font-semibold text-white leading-[30px] disabled:bg-[#1E3255] disabled:text-[#3E4F6D] ${SIZES[size]} ${rest.className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
