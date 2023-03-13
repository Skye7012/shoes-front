/* eslint-disable */
/* tslint:disable */

/** Response to get brands request */
export interface GetBrandsResponse {
  /**
   * Total count of items
   * @format int32
   */
  totalCount: number;
  /** Response items */
  items?: GetBrandsResponseItem[];
}

/** Brand dto in ShoesApi.Contracts.Requests.BrandRequests.GetBrandsRequest.GetBrandsResponse */
export interface GetBrandsResponseItem {
  /**
   * Id
   * @format int32
   */
  id: number;
  /** Name */
  name: string;
}

/** Response to get destinations request */
export interface GetDestinationsResponse {
  /**
   * Total count of items
   * @format int32
   */
  totalCount: number;
  /** Response items */
  items?: GetDestinationsResponseItem[];
}

/** Destination dto in ShoesApi.Contracts.Requests.DestinationRequests.GetDestinationsRequest.GetDestinationsResponse */
export interface GetDestinationsResponseItem {
  /**
   * Id
   * @format int32
   */
  id: number;
  /** Name */
  name: string;
}

/** Response to get orders request */
export interface GetOrdersResponse {
  /**
   * Total count of items
   * @format int32
   */
  totalCount: number;
  /** Response items */
  items?: GetOrdersResponseItem[];
}

/** Order dto in ShoesApi.Contracts.Requests.OrderRequests.GetOrdersResponse.GetOrdersResponse */
export interface GetOrdersResponseItem {
  /**
   * Id
   * @format int32
   */
  id: number;
  /**
   * OrderDate
   * @format date-time
   */
  orderDate: string;
  /** Address */
  address: string;
  /**
   * Sum
   * @format int32
   */
  sum: number;
  /**
   * Count
   * @format int32
   */
  count: number;
  /** Order Items */
  orderItems?: GetOrdersResponseItemOrderItem[];
}

/** OrderItem dto in ShoesApi.Contracts.Requests.OrderRequests.GetOrdersResponse.GetOrdersResponseItem */
export interface GetOrdersResponseItemOrderItem {
  /**
   * Id
   * @format int32
   */
  id: number;
  /**
   * RuSize
   * @format int32
   */
  ruSize: number;
  /** Shoe dto in ShoesApi.Contracts.Requests.OrderRequests.GetOrdersResponse.GetOrdersResponseItemOrderItem */
  shoe: GetOrdersResponseItemOrderItemShoe;
}

/** Shoe dto in ShoesApi.Contracts.Requests.OrderRequests.GetOrdersResponse.GetOrdersResponseItemOrderItem */
export interface GetOrdersResponseItemOrderItemShoe {
  /**
   * ID
   * @format int32
   */
  id: number;
  /** Name */
  name: string;
  /** Image name (for path) */
  image: string;
  /**
   * Price
   * @format int32
   */
  price: number;
}

/** Response to get seasons request */
export interface GetSeasonsResponse {
  /**
   * Total count of items
   * @format int32
   */
  totalCount: number;
  /** Response items */
  items?: GetSeasonsResponseItem[];
}

/** Season dto in ShoesApi.Contracts.Requests.SeasonRequests.GetSeasonsRequest.GetSeasonsResponse */
export interface GetSeasonsResponseItem {
  /**
   * Id
   * @format int32
   */
  id: number;
  /** Name */
  name: string;
}

/** Response to ShoesApi.Contracts.Requests.ShoesRequests.GetShoesRequest.GetShoesRequest */
export interface GetShoesResponse {
  /**
   * Total count of items
   * @format int32
   */
  totalCount: number;
  /** Response items */
  items?: GetShoesResponseItem[];
}

/** Shoe dto in ShoesApi.Contracts.Requests.ShoesRequests.GetShoesRequest.GetShoesResponse */
export interface GetShoesResponseItem {
  /**
   * id
   * @format int32
   */
  id: number;
  /** Name */
  name: string;
  /** Image name (for path) */
  image: string;
  /**
   * Price
   * @format int32
   */
  price: number;
  /** Brand dto in ShoesApi.Contracts.Requests.ShoesRequests.GetShoesRequest.GetShoesResponseItem */
  brand: GetShoesResponseItemBrand;
  /** Destination dto in ShoesApi.Contracts.Requests.ShoesRequests.GetShoesRequest.GetShoesResponseItem */
  destination: GetShoesResponseItemDestination;
  /** Season dto in ShoesApi.Contracts.Requests.ShoesRequests.GetShoesRequest.GetShoesResponseItem */
  season: GetShoesResponseItemSeason;
  /** RuSizes */
  ruSizes: number[];
}

/** Brand dto in ShoesApi.Contracts.Requests.ShoesRequests.GetShoesRequest.GetShoesResponseItem */
export interface GetShoesResponseItemBrand {
  /**
   * Id
   * @format int32
   */
  id: number;
  /** Name */
  name: string;
}

/** Destination dto in ShoesApi.Contracts.Requests.ShoesRequests.GetShoesRequest.GetShoesResponseItem */
export interface GetShoesResponseItemDestination {
  /**
   * Id
   * @format int32
   */
  id: number;
  /** Name */
  name: string;
}

/** Season dto in ShoesApi.Contracts.Requests.ShoesRequests.GetShoesRequest.GetShoesResponseItem */
export interface GetShoesResponseItemSeason {
  /**
   * Id
   * @format int32
   */
  id: number;
  /** Name */
  name: string;
}

/** Part of order in ShoesApi.Contracts.Requests.OrderRequests.PostOrderRequest.PostOrderRequest */
export interface OrderPostRequestOrderItem {
  /**
   * ShoeId
   * @format int32
   */
  shoeId: number;
  /**
   * RuSize
   * @format int32
   */
  ruSize: number;
}

/** Request for post order */
export interface PostOrderRequest {
  /** Address */
  address: string;
  /** OrderItems */
  orderItems: OrderPostRequestOrderItem[];
}

/** Request to signIn */
export interface SignInRequest {
  /** Login */
  login: string;
  /** Password */
  password: string;
}

/** Response to signIn */
export interface SignInResponse {
  /** Authorization token */
  token: string;
}

/** Request to signUp */
export interface SignUpRequest {
  /** Login */
  login: string;
  /** Password */
  password: string;
  /** Name */
  name: string;
  /** First Name */
  surname?: string;
  /** Phone */
  phone?: string;
}

/** Response to signUp */
export interface SignUpResponse {
  /**
   * UserId
   * @format int32
   */
  userId: number;
}

/** Response to get user credentials */
export interface UserGetResponse {
  /** Login */
  login: string;
  /** Name */
  name: string;
  /** First name */
  surname?: string;
  /** Phone */
  phone?: string;
}

/** Request to update User Credentials */
export interface UserPutRequest {
  /** Name */
  name?: string;
  /** First Name */
  surname?: string;
  /** Phone */
  phone?: string;
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
 * @title ShoesApi
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
     * @summary Get brands
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
     * @summary Get Destinations
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
  orders = {
    /**
     * No description
     *
     * @tags Orders
     * @name OrdersList
     * @summary Get Orders
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
     * @summary Post Orders
     * @request POST:/Orders
     * @secure
     */
    ordersCreate: (data: PostOrderRequest, params: RequestParams = {}) =>
      this.request<number, void>({
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
     * @summary Get Seasons
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
     * @summary Get Shoes
     * @request GET:/Shoes
     */
    shoesList: (
      query?: {
        /** Filter by search */
        SearchQuery?: string;
        /** Filter by brands */
        BrandFilters?: number[];
        /** Filter by destination */
        DestinationFilters?: number[];
        /** Filter by seasons */
        SeasonFilters?: number[];
        /** Filter by sizes */
        SizeFilters?: number[];
        /**
         * Page
         * @format int32
         */
        Page?: number;
        /**
         * Limit on page
         * @format int32
         */
        Limit?: number;
        /** Field for orderBy */
        OrderBy?: string;
        /** IsAscending ordering */
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
     * @summary Get Shoes by ids
     * @request GET:/Shoes/GetByIds
     */
    getByIdsList: (
      query?: {
        /** Ids */
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
     * @summary Get serialized into XML info about shoes
     * @request GET:/Shoes/GetXml
     */
    getXmlList: (params: RequestParams = {}) =>
      this.request<Blob, any>({
        path: `/Shoes/GetXml`,
        method: "GET",
        format: "blob",
        ...params
      })
  };
  sizes = {
    /**
     * No description
     *
     * @tags Sizes
     * @name SizesList
     * @summary Get Sizes
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
     * @summary Get User Credentials
     * @request GET:/User
     * @secure
     */
    userList: (params: RequestParams = {}) =>
      this.request<UserGetResponse, void>({
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
     * @summary Update User Credentials
     * @request PUT:/User
     * @secure
     */
    userUpdate: (data: UserPutRequest, params: RequestParams = {}) =>
      this.request<void, void>({
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
     * @summary Delete User
     * @request DELETE:/User
     * @secure
     */
    userDelete: (params: RequestParams = {}) =>
      this.request<void, void>({
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
     * @summary SignUp
     * @request POST:/User/SignUp
     */
    signUpCreate: (data: SignUpRequest, params: RequestParams = {}) =>
      this.request<SignUpResponse, any>({
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
     * @summary SignIn
     * @request POST:/User/SignIn
     */
    signInCreate: (data: SignInRequest, params: RequestParams = {}) =>
      this.request<SignInResponse, any>({
        path: `/User/SignIn`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params
      })
  };
}
