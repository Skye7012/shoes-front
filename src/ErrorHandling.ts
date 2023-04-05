import axios, { AxiosError } from "axios";
import { isBaseError } from "./errors/baseError";

/** Выбросить ошибку */
export function throwError(error: unknown | AxiosError) {
  if (axios.isAxiosError(error)
    && error.response
    && isBaseError(error.response.data))
      alert(error.response.data.message);
  else alert("Произошла неизвестная ошибка");
}
