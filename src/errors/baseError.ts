/**
 * Базовая ошибка
 */
export class BaseError {
  message: string;

  constructor(message: string)
  {
    this.message = message;
  }
}

/**
 * Type guard for {@link BaseError}
 * @param error Ошибка
 * @returns is BaseError
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isBaseError(error: any): error is BaseError {
  return error.message !== undefined;
}
