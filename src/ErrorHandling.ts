import axios, { AxiosError } from "axios";
import { isProblemDetails } from "./api/Api";

/** Выбросить ошибку */
export function throwError(error: unknown | AxiosError) {
  if (axios.isAxiosError(error)
    && error.response
    && isProblemDetails(error.response.data))
      alert(error.response.data.detail);
  else alert("Произошла неизвестная ошибка");
}
