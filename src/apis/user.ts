import { instance } from "./instance";

type SendVerifyCodeType = {
  phoneNumber: string;
  name: string;
};

type CheckVerifyCodeType = {
  phoneNumber: string;
  validationCode: string;
};

type LoginType = {
  phoneNumber: string;
  password: string;
};

type RegisterType = SendVerifyCodeType & { password: string };

export const sendVerifyCode = (data: SendVerifyCodeType) => instance.post("/users/send-validation-code", data);
export const checkVerifyCode = (data: CheckVerifyCodeType) => instance.post("/users/validation-code", data);
export const register = (data: RegisterType) => instance.post("/users/signup", data);
export const login = (data: LoginType) => instance.post("/users/login", data);
