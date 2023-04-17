import { ProblemDetails } from "./Api";

/**
 * Type guard for {@link ProblemDetails}
 * @param error Ошибка
 * @returns is ProblemDetails
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isProblemDetails(error: any): error is ProblemDetails {
  return error.detail !== undefined;
}
