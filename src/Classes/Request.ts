import { AxiosError, AxiosInstance } from 'axios'

/**
 * Delays the execution of the code for a specified number of seconds.
 * @param second - The number of seconds to delay.
 * @returns A Promise that resolves after the specified number of seconds.
 */
export function delay(second: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, second * 1000)
  })
}

/**
 * Class for handling HTTP requests with customizable headers, body, and parameters.
 *
 * @class
 * @internal
 * @category Internal
 */
export class Request {
  /**
   * The number of request attempts made.
   */
  private retries = 1

  constructor(private client: AxiosInstance) {}

  /**
   * Send the HTTP request.
   *
   * @param url - The URL to send the request to.
   * @param method - The HTTP method to use. Defaults to 'GET'.
   * @param ttl - The TTL value for the cached data in seconds.
   * @returns A Promise that resolves with the response data, or rejects with a HoyolabError if an error occurs.
   * @throws {HoyolabError} if an error occurs rejects with a HoyolabError
   */
  public async send(
    method: 'GET' | 'POST' | 'PATCH' = 'GET',
    data: unknown,
  ): Promise<unknown> {
    try {
      const request = await this.client.request({
        method,
        data,
      })

      const result = request.data

      if (result.status === 429 && this.retries <= 60) {
        this.retries++
        await delay(
          parseInt(
            request.headers?.['x-ratelimit-reset-after'] ??
              result.retry_after ??
              3,
            10,
          ),
        )
        return this.send(method, data)
      }

      this.retries = 1
      return result
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(`Request Error: [${error.code}] - ${error.message}`)
      } else {
        return {
          retcode: -9999,
          message: '',
          data: null,
          error: JSON.stringify(error),
        }
      }
    }
  }
}
