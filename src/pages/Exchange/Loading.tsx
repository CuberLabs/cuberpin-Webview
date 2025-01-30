import { Culture } from "../../assets";
import { DataType, stateType } from ".";
import { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { charge } from "../../apis/charge";
import { log } from "../../utils";

interface IProp {
  nextpage?: any;
  data: DataType;
  setSuccess: React.Dispatch<React.SetStateAction<stateType>>;
  index?: any;
}

export const Loading = ({ index, setSuccess, nextpage, data }: IProp) => {
  const { mutate } = useMutation({
    mutationFn: () => charge(data),
    onSuccess: (res) => {
      const socket = new WebSocket(import.meta.env.VITE_SOCKET_URL + `/charge/${res?.data.chargeId}`);

      socket.onmessage = (event) => {
        log(event?.data);
        if (event?.data) {
          const [_, __, ___, status, amount] = event.data.split(" ");
          if (status === "COMPLETED" || status === "PARTIALLY_DEPOSITED") {
            setSuccess({ status: true, amount });
            nextpage();
          } else if (status === "FAILED") {
            nextpage();
          }
        }
      };

      socket.onerror = (event) => {
        log(event);
        nextpage();
      };
    },
    onError: (event) => log(event),
  });

  useEffect(() => {
    if (index === 3) mutate();
  }, [index]);

  return (
    <div className="w-full h-full flex items-center justify-center gap-14 flex-col text-center">
      <Culture width={100} height={100} />
      <span className="text-white font-medium text-[24px] whitespace-pre-line">{"상품권들을 현금화하고 있어요\n잠시 기다려 주세요"}</span>
    </div>
  );
};
