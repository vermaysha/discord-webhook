import { IAttachment } from './IAttachment'

export interface IThumbnail {
  /**
   * Source URL of the thumbnail.
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
