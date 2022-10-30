import { IAttachment } from './IAttachment'

export interface IFooter {
  /**
   * Footer text.
   */
  text: string

  /**
   * URL of the footer icon.
   * Only supports HTTP(s) and attachments
   */
  icon_url?: string | IAttachment

  /**
   * A proxied URL of the footer icon.
   */
  proxy_icon_url?: string
}
