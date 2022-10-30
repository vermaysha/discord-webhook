export interface IWebhookParameter {
  /**
   * Update the default name of the webhook.
   */
  name?: string

  /**
   * Update the default avatar of the webhook.
   */
  avatar?: string

  /**
   * Move the webhook to another channel.
   * Snowflake
   */
  channel_id?: string
}
