import axios, { AxiosInstance, AxiosPromise } from 'axios'
import type {
  IAttachment,
  IEmbed,
  IWebhook,
  IWebhookParameter,
  IWebhookResponse,
} from '../Interfaces'
import { Embed } from './Embed'

export class Webhook {
  protected client: AxiosInstance

  /**
   * Webhook username override.
   */
  protected username?: string

  /**
   * Webhook avatar override.
   */
  protected avatar_url?: string

  /**
   * Whether or not this notification should be read as text to speech.
   */
  protected tts?: boolean

  /**
   * Message contents.
   * Max 2000 characters
   */
  protected content?: string

  /**
   * Contents of a file being sent.
   */
  protected file?: IAttachment | string

  /**
   * Embedded "rich" content.
   */
  protected embeds?: Array<IEmbed>

  /**
   *
   * @param webhookUrl
   */
  constructor(webhookUrl: string) {
    this.client = axios.create({
      baseURL: webhookUrl,
    })
  }

  /**
   * Webhook username override.
   *
   * @param username string
   * @returns Embed
   */
  public setUsername(username: string): Webhook {
    this.username = username
    return this
  }

  /**
   * Webhook avatar override.
   *
   * @param url string
   * @returns Embed
   */
  public setAvatarUrl(url: string): Webhook {
    this.avatar_url = url
    return this
  }

  /**
   * Whether or not this notification should be read as text to speech.
   *
   * @param flag boolean
   * @returns Embed
   */
  public setTTS(flag: boolean): Webhook {
    this.tts = flag
    return this
  }

  /**
   * Message contents.
   * Max 2000 characters
   *
   * @param content string
   * @returns Embed
   */
  public setContent(content: string): Webhook {
    this.content = content.substring(0, 2000)
    return this
  }

  /**
   * Add Embedded "rich" content.
   * Max 10 embeds
   *
   * @param embed string
   * @returns Embed
   */
  public addEmbed(embed: Embed): Webhook {
    if (typeof this.embeds === 'undefined') this.embeds = [embed.toObject()]
    else if (this.embeds.length <= 10) this.embeds?.push(embed.toObject())

    return this
  }

  /**
   * Contents of a file being sent.
   *
   * @param file Attachment | string
   * @returns Embed
   */
  public setFile(file: IAttachment | string): Webhook {
    this.file = file
    return this
  }

  /**
   * Send webhook
   */
  public async send() {
    return this.client
      .request({
        method: 'POST',
        data: this.toObject(),
      })
      .then((res) => res)
      .catch((err) => {
        throw new Error(err?.response?.data?.message)
      })
  }

  /**
   * Modify the current webhook.
   */
  public async modify(
    options: IWebhookParameter,
  ): AxiosPromise<IWebhookResponse> {
    return this.client
      .request({
        method: 'PATCH',
        data: options,
      })
      .then((res) => res)
      .catch((err) => {
        throw new Error(err?.response?.data?.message)
      })
  }

  /**
   * Get the current webhook.
   */
  public async get(): AxiosPromise<IWebhookResponse> {
    return this.client
      .request({
        method: 'GET',
      })
      .then((res) => res)
      .catch((err) => {
        throw new Error(err?.response?.data?.message)
      })
  }

  /**
   * Check whether or not the current webhook is valid.
   */
  public async isValid(): Promise<boolean> {
    return this.get()
      .then(() => true)
      .catch(() => false)
  }

  /**
   * Generate parameter ready object
   *
   * @returns IWebhook
   */
  public toObject(): IWebhook {
    return {
      username: this.username,
      avatar_url: this.avatar_url,
      tts: this.tts,
      content: this.content,
      file: this.file,
      embeds: this.embeds,
    }
  }
}
