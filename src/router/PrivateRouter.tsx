import React, { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState, user } from "../global/global";
import jwt_decode from "jwt-decode";

const PrivateRouter: React.FC<PropsWithChildren> = ({ children }) => {
  const value: any = useRecoilValue(userState);
  const [state, setState] = useRecoilState<any>(user);

  console.log(state)
  let myToken: any = {};
  let tokenID: string = value;

  if (tokenID) {
    myToken = jwt_decode(tokenID);
    setState(myToken.id);
  }
  return (
    <div>{tokenID ? <div>{children}</div> : <Navigate to="/sign-in" />}</div>
  );
};

export default PrivateRouter;