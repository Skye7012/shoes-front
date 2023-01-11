import qs from "qs";
import { AxiosResponse } from "axios";
import { getBaseUrl, getToken, getTokenName } from "@/envHelper";
import { Api as GeneratedApi } from "./Api";

class Api extends GeneratedApi<unknown> {
  constructor() {
    super();
    const tokenName = getTokenName();
    if (!tokenName) {
      throw new Error("Не определена переменная среды: токен авторизации");
    }

    const baseUrl = getBaseUrl();
    if (!baseUrl) {
      throw new Error("Не определена переменная среды: базовый url");
    }

    this.instance.interceptors.request.use((config) => {
      const token = getToken();
      if (config.headers) {
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    this.instance.defaults.baseURL = baseUrl;
    this.instance.defaults.paramsSerializer = (params) => qs.stringify(params);
  }

  // eslint-disable-next-line class-methods-use-this
  downloadFile(response: AxiosResponse<Blob, unknown>) {
    const fileName = response.headers["content-disposition"].match(
      /filename=(?<FileName>(.+?)\.(.+?));/
    )?.[1];

    if (!fileName) throw new Error("Не удается получить наименование файла");

    const url = URL.createObjectURL(response.data);

    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = fileName;
    anchor.click();

    URL.revokeObjectURL(url);
  }
}

export const apiClient = new Api();
