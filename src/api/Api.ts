/* eslint-disable */
/* tslint:disable */

/** Ответ на запрос получения коллекции Сезонов обуви */
export interface GetBrandsResponse {
  /**
   * Количество объектов
   * @format int32
   */
  totalCount: number;
  /** Объекты */
  items?: GetBrandsResponseItem[];
}

/** ДТО Брэндов обуви из ShoesApi.Contracts.Requests.Brands.GetBrands.GetBrandsResponse */
export interface GetBrandsResponseItem {
  /**
   * Идентификатор
   * @format int32
   */
  id: number;
  /** Наименование */
  name: string;
}

/** Ответ на запрос получения коллекции Назначений обуви */
export interface GetDestinationsResponse {
  /**
   * Количество объектов
   * @format int32
   */
  totalCount: number;
  /** Объекты */
  items?: GetDestinationsResponseItem[];
}

/** ДТО Назначений обуви из ShoesApi.Contracts.Requests.Destinations.GetDestinations.GetDestinationsResponse */
export interface GetDestinationsResponseItem {
  /**
   * Идентификатор
   * @format int32
   */
  id: number;
  /** Наименование */
  name: string;
}

/** Ответ на запрос получения коллекции заказов пользователя */
export interface GetOrdersResponse {
  /**
   * Количество объектов
   * @format int32
   */
  totalCount: number;
  /** Объекты */
  items?: GetOrdersResponseItem[];
}

/** ДТО Заказа из ShoesApi.Contracts.Requests.Orders.GetOrders.GetOrdersResponse */
export interface GetOrdersResponseItem {
  /**
   * Идентификатор
   * @format int32
   */
  id: number;
  /**
   * Дата заказа
   * @format date-time
   */
  orderDate: string;
  /** Адрес */
  address: string;
  /**
   * Итоговая сумма заказа
   * @format int32
   */
  sum: number;
  /**
   * Количество вещей в заказе
   * @format int32
   */
  count: number;
  /** Заказанные кроссовки */
  orderItems?: GetOrdersResponseItemOrderItem[];
}

/** ДТО Части заказа из ShoesApi.Contracts.Requests.Orders.GetOrders.GetOrdersResponseItem */
export interface GetOrdersResponseItemOrderItem {
  /**
   * Идентификатор
   * @format int32
   */
  id: number;
  /**
   * Российский размер обуви
   * @format int32
   */
  ruSize: number;
  /** ДТО Обуви из ShoesApi.Contracts.Requests.Orders.GetOrders.GetOrdersResponseItemOrderItem */
  shoe: GetOrdersResponseItemOrderItemShoe;
}

/** ДТО Обуви из ShoesApi.Contracts.Requests.Orders.GetOrders.GetOrdersResponseItemOrderItem */
export interface GetOrdersResponseItemOrderItemShoe {
  /**
   * Идентификатор
   * @format int32
   */
  id: number;
  /** Наименование */
  name: string;
  /**
   * Идентификатор файла изображения
   * @format int32
   */
  imageFileId: number;
  /**
   * Цена
   * @format int32
   */
  price: number;
}

/** Ответ на запрос получения коллекции Сезонов обуви */
export interface GetSeasonsResponse {
  /**
   * Количество объектов
   * @format int32
   */
  totalCount: number;
  /** Объекты */
  items?: GetSeasonsResponseItem[];
}

/** ДТО Сезона обуви из ShoesApi.Contracts.Requests.Seasons.GetSeasons.GetSeasonsResponse */
export interface GetSeasonsResponseItem {
  /**
   * Идентификатор
   * @format int32
   */
  id: number;
  /** Наименование */
  name: string;
}

/** Шаблонный ответ на получение коллекции обуви */
export interface GetShoesResponse {
  /**
   * Количество объектов
   * @format int32
   */
  totalCount: number;
  /** Объекты */
  items?: GetShoesResponseItem[];
}

/** ДТО Обуви из ShoesApi.Contracts.Requests.Shoes.Common.GetShoesResponse */
export interface GetShoesResponseItem {
  /**
   * Идентификатор
   * @format int32
   */
  id: number;
  /** Наименование */
  name: string;
  /**
   * Идентификатор файла изображения
   * @format int32
   */
  imageFileId: number;
  /**
   * Цена
   * @format int32
   */
  price: number;
  /** ДТО Брэнда обуви из ShoesApi.Contracts.Requests.Shoes.Common.GetShoesResponseItem */
  brand: GetShoesResponseItemBrand;
  /** ДТО Назначения обуви из ShoesApi.Contracts.Requests.Shoes.Common.GetShoesResponseItem */
  destination: GetShoesResponseItemDestination;
  /** ДТО Сезона обуви из ShoesApi.Contracts.Requests.Shoes.Common.GetShoesResponseItem */
  season: GetShoesResponseItemSeason;
  /** Российские Размеры обуви */
  ruSizes: number[];
}

/** ДТО Брэнда обуви из ShoesApi.Contracts.Requests.Shoes.Common.GetShoesResponseItem */
export interface GetShoesResponseItemBrand {
  /**
   * Идентификатор
   * @format int32
   */
  id: number;
  /** Наименование */
  name: string;
}

/** ДТО Назначения обуви из ShoesApi.Contracts.Requests.Shoes.Common.GetShoesResponseItem */
export interface GetShoesResponseItemDestination {
  /**
   * Идентификатор
   * @format int32
   */
  id: number;
  /** Наименование */
  name: string;
}

/** ДТО Сезона обуви из ShoesApi.Contracts.Requests.Shoes.Common.GetShoesResponseItem */
export interface GetShoesResponseItemSeason {
  /**
   * Идентификатор
   * @format int32
   */
  id: number;
  /** Наименование */
  name: string;
}

/** Ответ на запрос получения данных о пользователе */
export interface GetUserResponse {
  /** Логин */
  login: string;
  /** Имя */
  name: string;
  /** Фамилия */
  surname?: string;
  /** Телефон */
  phone?: string;
}

/** Запрос для размещения заказа пользователя */
export interface PostOrderRequest {
  /** Адрес */
  address: string;
  /** Заказанная обувь */
  orderItems: PostOrderRequestOrderItem[];
}

/** ДТО Части заказа из ShoesApi.Contracts.Requests.Orders.PostOrder.PostOrderRequest */
export interface PostOrderRequestOrderItem {
  /**
   * Идентификатор обуви
   * @format int32
   */
  shoeId: number;
  /**
   * Выбранный Российский размер
   * @format int32
   */
  ruSize: number;
}

/** Запрос на создание обуви */
export interface PostShoeRequest {
  /** Наименование */
  name: string;
  /**
   * Идентификатор файла изображения
   * @format int32
   */
  imageFileId: number;
  /**
   * Цена
   * @format int32
   */
  price: number;
  /**
   * Идентификатор Брэнда обуви
   * @format int32
   */
  brandId: number;
  /**
   * Идентификатор Назначения обуви
   * @format int32
   */
  destinationId: number;
  /**
   * Идентификатор Сезона обуви
   * @format int32
   */
  seasonId: number;
  /**
   * Идентификатор Размеров обуви
   * @uniqueItems true
   */
  sizesIds: number[];
}

export interface ProblemDetails {
  type?: string;
  title?: string;
  /** @format int32 */
  status?: number;
  detail: string;
  instance?: string;
  [key: string]: any;
}

/** Запрос на обновление обуви */
export interface PutShoeRequest {
  /** Наименование */
  name: string;
  /**
   * Идентификатор файла изображения
   * @format int32
   */
  imageFileId: number;
  /**
   * Цена
   * @format int32
   */
  price: number;
  /**
   * Идентификатор Брэнда обуви
   * @format int32
   */
  brandId: number;
  /**
   * Идентификатор Назначения обуви
   * @format int32
   */
  destinationId: number;
  /**
   * Идентификатор Сезона обуви
   * @format int32
   */
  seasonId: number;
  /**
   * Идентификатор Размеров обуви
   * @uniqueItems true
   */
  sizesIds: number[];
}

/** Запрос на обновление данных о пользователе */
export interface PutUserRequest {
  /** Имя */
  name?: string;
  /** Фамилия */
  surname?: string;
  /** Телефон */
  phone?: string;
}

/** Запрос на авторизацию пользователя */
export interface SignInUserRequest {
  /** Логин */
  login: string;
  /** Пароль */
  password: string;
}

/** Ответ на ShoesApi.Contracts.Requests.Users.SignInUser.SignInUserRequest */
export interface SignInUserResponse {
  /** Токен авторизации */
  token: string;
}

/** Запрос для регистрации пользователя */
export interface SignUpUserRequest {
  /** Логин */
  login: string;
  /** Пароль */
  password: string;
  /** Имя */
  name: string;
  /** Фамилия */
  surname?: string;
  /** Телефон */
  phone?: string;
}

/** Ответ на ShoesApi.Contracts.Requests.Users.SignUpUser.SignUpUserRequest */
export interface SignUpUserResponse {
  /**
   * Идентификатор зарегистрированного пользователя
   * @format int32
   */
  userId: number;
}

import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType
} from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain"
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || ""
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {})
      }
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem)
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData
          ? { "Content-Type": type }
          : {})
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path
    });
  };
}

/**
 * @title ShoesApi.Api
 * @version 1.0
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  brands = {
    /**
     * No description
     *
     * @tags Brands
     * @name BrandsList
     * @summary Получить список Брэндов обуви
     * @request GET:/Brands
     */
    brandsList: (params: RequestParams = {}) =>
      this.request<GetBrandsResponse, any>({
        path: `/Brands`,
        method: "GET",
        format: "json",
        ...params
      })
  };
  destinations = {
    /**
     * No description
     *
     * @tags Destinations
     * @name DestinationsList
     * @summary Получить список Назначений обуви
     * @request GET:/Destinations
     */
    destinationsList: (params: RequestParams = {}) =>
      this.request<GetDestinationsResponse, any>({
        path: `/Destinations`,
        method: "GET",
        format: "json",
        ...params
      })
  };
  files = {
    /**
     * No description
     *
     * @tags Files
     * @name DownloadDetail
     * @summary Скачать файл
     * @request GET:/Files/Download/{id}
     */
    downloadDetail: (id: number, params: RequestParams = {}) =>
      this.request<Blob, ProblemDetails>({
        path: `/Files/Download/${id}`,
        method: "GET",
        format: "blob",
        ...params
      }),

    /**
     * No description
     *
     * @tags Files
     * @name UploadCreate
     * @summary Загрузить файл
     * @request POST:/Files/Upload
     */
    uploadCreate: (
      data: {
        /** @format binary */
        file?: File;
      },
      params: RequestParams = {}
    ) =>
      this.request<number, any>({
        path: `/Files/Upload`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params
      })
  };
  orders = {
    /**
     * No description
     *
     * @tags Orders
     * @name OrdersList
     * @summary Получить заказы пользователя
     * @request GET:/Orders
     * @secure
     */
    ordersList: (params: RequestParams = {}) =>
      this.request<GetOrdersResponse, void>({
        path: `/Orders`,
        method: "GET",
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Orders
     * @name OrdersCreate
     * @summary Создать заказ
     * @request POST:/Orders
     * @secure
     */
    ordersCreate: (data: PostOrderRequest, params: RequestParams = {}) =>
      this.request<number, ProblemDetails | void>({
        path: `/Orders`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params
      })
  };
  seasons = {
    /**
     * No description
     *
     * @tags Seasons
     * @name SeasonsList
     * @summary Получить список Сезонов обуви
     * @request GET:/Seasons
     */
    seasonsList: (params: RequestParams = {}) =>
      this.request<GetSeasonsResponse, any>({
        path: `/Seasons`,
        method: "GET",
        format: "json",
        ...params
      })
  };
  shoes = {
    /**
     * No description
     *
     * @tags Shoes
     * @name ShoesList
     * @summary Получить список обуви
     * @request GET:/Shoes
     */
    shoesList: (
      query?: {
        /** Фильтр поисковой строки */
        SearchQuery?: string;
        /** Фильтр по Брэндам обуви */
        BrandFilters?: number[];
        /** Фильтр по Назначениям обуви */
        DestinationFilters?: number[];
        /** Фильтр по Сезонам обуви */
        SeasonFilters?: number[];
        /** Фильтр по Размерам обуви */
        SizeFilters?: number[];
        /**
         * Страница
         * @format int32
         */
        Page?: number;
        /**
         * Лимит страницы
         * @format int32
         */
        Limit?: number;
        /** Поле сортировки */
        OrderBy?: string;
        /** Сортировка по возрастанию */
        IsAscending?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetShoesResponse, any>({
        path: `/Shoes`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Shoes
     * @name GetByIdsList
     * @summary Получить список обуви по коллекции идентификаторов
     * @request GET:/Shoes/GetByIds
     */
    getByIdsList: (
      query?: {
        /** Коллекция идентификаторов */
        ids?: number[];
      },
      params: RequestParams = {}
    ) =>
      this.request<GetShoesResponse, any>({
        path: `/Shoes/GetByIds`,
        method: "GET",
        query: query,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Shoes
     * @name GetXmlList
     * @summary Получить коллекцию обуви в формате XML
     * @request GET:/Shoes/GetXml
     */
    getXmlList: (params: RequestParams = {}) =>
      this.request<Blob, any>({
        path: `/Shoes/GetXml`,
        method: "GET",
        format: "blob",
        ...params
      }),

    /**
     * No description
     *
     * @tags Shoes
     * @name ShoesCreate
     * @summary Создать обувь
     * @request POST:/Shoes/{id}
     */
    shoesCreate: (
      id: string,
      data: PostShoeRequest,
      params: RequestParams = {}
    ) =>
      this.request<number, ProblemDetails>({
        path: `/Shoes/${id}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags Shoes
     * @name ShoesUpdate
     * @summary Обновить данные об обуви
     * @request PUT:/Shoes/{id}
     */
    shoesUpdate: (
      id: number,
      data: PutShoeRequest,
      params: RequestParams = {}
    ) =>
      this.request<void, ProblemDetails>({
        path: `/Shoes/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags Shoes
     * @name ShoesDelete
     * @summary Удалить обувь
     * @request DELETE:/Shoes/{id}
     */
    shoesDelete: (id: number, params: RequestParams = {}) =>
      this.request<void, ProblemDetails>({
        path: `/Shoes/${id}`,
        method: "DELETE",
        ...params
      })
  };
  sizes = {
    /**
     * No description
     *
     * @tags Sizes
     * @name SizesList
     * @summary Получить список Размеров обуви
     * @request GET:/Sizes
     */
    sizesList: (params: RequestParams = {}) =>
      this.request<number[], any>({
        path: `/Sizes`,
        method: "GET",
        format: "json",
        ...params
      })
  };
  user = {
    /**
     * No description
     *
     * @tags User
     * @name UserList
     * @summary Получить данные о пользователе
     * @request GET:/User
     * @secure
     */
    userList: (params: RequestParams = {}) =>
      this.request<GetUserResponse, void | ProblemDetails>({
        path: `/User`,
        method: "GET",
        secure: true,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserUpdate
     * @summary Обновить данные о пользователе
     * @request PUT:/User
     * @secure
     */
    userUpdate: (data: PutUserRequest, params: RequestParams = {}) =>
      this.request<void, void | ProblemDetails>({
        path: `/User`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserDelete
     * @summary Удалить пользователя
     * @request DELETE:/User
     * @secure
     */
    userDelete: (params: RequestParams = {}) =>
      this.request<void, void | ProblemDetails>({
        path: `/User`,
        method: "DELETE",
        secure: true,
        ...params
      }),

    /**
     * No description
     *
     * @tags User
     * @name SignUpCreate
     * @summary Зарегистрироваться
     * @request POST:/User/SignUp
     */
    signUpCreate: (data: SignUpUserRequest, params: RequestParams = {}) =>
      this.request<SignUpUserResponse, ProblemDetails>({
        path: `/User/SignUp`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      }),

    /**
     * No description
     *
     * @tags User
     * @name SignInCreate
     * @summary Авторизоваться
     * @request POST:/User/SignIn
     */
    signInCreate: (data: SignInUserRequest, params: RequestParams = {}) =>
      this.request<SignInUserResponse, ProblemDetails>({
        path: `/User/SignIn`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      })
  };
}
