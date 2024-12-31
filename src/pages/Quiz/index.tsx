import { useState } from "react";
import { Slide } from "../../components/Slide";
import { Detail } from "./Detail";
import { Loading } from "./Loading";
import { Success } from "./Success";
import { Fail } from "./Fail";

export const Quiz = () => {
  const [pass, setPass] = useState<null | boolean>(null);

  return (
    <div className="w-full h-full">
      <Slide>
        <Detail setPass={setPass} />
        {pass !== null ? (
          pass ? (
            <>
              <Loading />
              <Success />
            </>
          ) : (
            <Fail />
          )
        ) : (
          <></>
        )}
      </Slide>
    </div>
  );
};
