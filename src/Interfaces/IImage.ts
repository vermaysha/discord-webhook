import { IAttachment } from './IAttachment'

export interface IImage {
  /**
   * Source URL of the image.
   * (Only supports http(s) and attachments)
   */
  url: string | IAttachment

  /**
   * A proxied URL of the thumbnail.
   */
  proxy_url?: string

  /**
   * Height of the thumbnail.
   */
  height?: number

  /**
   * Width of the thumbnail.
   */
  width?: number
}
