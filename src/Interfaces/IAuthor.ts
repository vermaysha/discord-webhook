import { IAttachment } from './IAttachment'

export interface IAuthor {
  /**
   * Name of the author.
   */
  name?: string

  /**
   * URL of the author.
   */
  url?: string

  /**
   * URL of the author icon.
   * (Only supports HTTP(s) and attachments)
   */
  icon_url?: string | IAttachment

  /**
   * Proxied URL of the author icon.
   */
  proxy_icon_url?: string
}
