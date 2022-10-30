import { IAttachment } from './IAttachment'
import { IEmbed } from './IEmbed'

export interface IWebhook {
  /**
   * Webhook username override.
   */
  username?: string

  /**
   * Webhook avatar override.
   */
  avatar_url?: string

  /**
   * Whether or not this notification should be read as text to speech.
   */
  tts?: boolean

  /**
   * Message contents.
   * Max 2000 characters
   */
  content?: string

  /**
   * Contents of a file being sent.
   */
  file?: IAttachment | string

  /**
   * Embedded "rich" content.
   */
  embeds?: Array<IEmbed>
}
