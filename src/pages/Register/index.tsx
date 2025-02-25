import { useSearchParams } from "react-router-dom";
import { Slide } from "../../components";
import { StartWithQuiz } from "./StartWithQuiz";
import { Phone } from "./Phone";
import { Name } from "./Name";
import { Password } from "./Password";
import { Success } from "./Success";
import { useMemo, useState } from "react";
import { Check } from "./Check";
import { Verify } from "./Verify";

export interface DataType {
  phoneNumber: string;
  name: string;
  password: string;
}

export const Register = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState<DataType>({
    phoneNumber: "",
    name: "",
    password: "",
  });
  const isStartByQuiz = useMemo(() => searchParams.get("startByQuiz") === "true", []);

  if (isStartByQuiz) {
    return (
      <div className="w-full h-full overflow-auto">
        <Slide>
          <StartWithQuiz />
          <Phone data={data} setData={setData} />
          <Name data={data} setData={setData} />
          <Check data={data} />
          <Verify data={data} />
          <Password data={data} setData={setData} />
          <Success />
        </Slide>
      </div>
    );
  } else {
    return (
      <div className="w-full h-full overflow-auto">
        <Slide>
          <Phone data={data} setData={setData} />
          <Name data={data} setData={setData} />
          <Check data={data} />
          <Verify data={data} />
          <Password data={data} setData={setData} />
          <Success />
        </Slide>
      </div>
    );
  }
};
