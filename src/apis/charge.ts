import { DataType } from "../pages";
import { instance } from "./instance";

export const charge = (data: DataType) => instance.post("/charges", data);
