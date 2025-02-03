import { Slide } from "../../components";
import { useState } from "react";
import { Phone } from "./Phone";
import { Password } from "./Password";
import { Success } from "./Success";

export interface DataType {
  phoneNumber: string;
  password: string;
}

export const Login = () => {
  const [data, setData] = useState<DataType>({
    phoneNumber: "",
    password: "",
  });

  return (
    <div className="w-full h-full overflow-auto">
      <Slide>
        <Phone data={data} setData={setData} />
        <Password data={data} setData={setData} />
        <Success />
      </Slide>
    </div>
  );
};
