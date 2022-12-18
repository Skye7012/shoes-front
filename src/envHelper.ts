/** Получить базовый url */
export function getBaseUrl() {
  return process.env.VUE_APP_BASE_URL;
}

/** Получить наименование токена */
export function getTokenName() {
  return process.env.VUE_APP_TOKEN;
}

/** Получить токен */
export function getToken(): string | undefined {
  return localStorage.getItem(getTokenName()) ?? undefined;
}

/** Присвоить токен */
export function setToken(token: string) {
  localStorage.setItem(getTokenName(), token);
}

/** Удалить токен */
export function removeToken() {
  localStorage.removeItem(getTokenName());
}

/** Формат данных элемента корзины в хранилище */
export interface IBasketStoreItem {
  id: number;
  size: number;
}

/** Получить наименование корзины */
export function getBasketName() {
  return process.env.VUE_APP_BASKET_NAME;
}

/** Получить корзину */
export function getBasket(): IBasketStoreItem[] | undefined {
  const json = localStorage.getItem(getBasketName());
  return json ? JSON.parse(json) : undefined;
}

/** Присвоить значение корзине */
export function setBasket(basket: IBasketStoreItem[]) {
  localStorage.setItem(getBasketName(), JSON.stringify(basket));
}

/** Удалить корзину */
export function removeBasket() {
  localStorage.removeItem(getBasketName());
}
