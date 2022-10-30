import type { IUser } from './IUser'

export interface IWebhookResponse {
  /**
   * ID of the current webhook.
   * Snowflake
   */
  id: string

  /**
   * 	the type of the webhook
   */
  type: number

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

  /**
   * the bot/OAuth2 application that created this webhook
   */
  application_id: string

  /**
   * the url used for executing the webhook (returned by the webhooks OAuth2 flow)
   */
  url?: string

  /**
   * 	partial guild object
   */
  source_guild?: {
    id: number
    name: string
    icon?: string
  }

  /**
   * partial channel object
   */
  source_channel?: {
    id: number
    name: string
  }
}
