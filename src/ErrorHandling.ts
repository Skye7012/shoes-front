import axios, { AxiosError } from "axios";

/** Выбросить ошибку */
export function throwError(error: unknown | AxiosError) {
  if (axios.isAxiosError(error) && error.response) alert(error.response.data);
  else alert("Произошла неизвестная ошибка");
}
