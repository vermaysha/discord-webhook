import type { IUser } from './IUser'

export interface IWebhookResponse {
  /**
   * ID of the current webhook.
   * Snowflake
   */
  id: string

  /**
   * ID of the channel this webhook belongs to.
   * Snowflake
   */
  channel_id: string

  /**
   * ID of the guild this webhook belongs to.
   * Snowflake
   */
  guild_id: string

  /**
   * User that created this webhook.
   */
  user?: IUser

  /**
   * Name of the current webhook.
   */
  name: string

  /**
   * Avatar of the current webhook.
   */
  avatar: string

  /**
   * Secure token of the current webhook.
   */
  token: string
}
