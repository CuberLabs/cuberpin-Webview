import { Children, cloneElement, Fragment, useState } from "react";

interface IProp {
  /** minimum two items */
  children: React.ReactElement[];
}

export const Slide = ({ children }: IProp) => {
  const maxIndex = children.length;
  const [index, setIndex] = useState(0);
  const [direct, setDirect] = useState<null | "left" | "right">(null);

  const screens = [].concat(
    ...children.map((i) =>
      i.type === Fragment ? Children.map(i.props.children, (item) => item) : i
    )
  );

  const [Curr, Next] = screens.slice(index, index + 2).map((i) =>
    i
      ? cloneElement(i, {
          nextpage: () => {
            if (index < maxIndex - 1) {
              setDirect("right");
              setTimeout(() => {
                setDirect(null);
                setIndex((prev) => prev + 1);
              }, 600);
            }
          },
        })
      : undefined
  );

  return (
    <div className={`w-full h-full overflow-hidden`}>
      <div
        style={
          direct
            ? {
                transform: `translateX(${direct === "left" ? 100 : -100}%)`,
                transition: "all",
                transitionDuration: "400ms",
                transitionTimingFunction: "cubic-bezier(0.25, 0.8, 0.25, 1)",
              }
            : {}
        }
        className="w-full h-full flex [&>*]:shrink-0"
      >
        {Curr}
        {Next}
      </div>
    </div>
  );
};
