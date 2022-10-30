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
   * @returns this
   */
  public setUsername(username: string): Webhook {
    this.username = username
    return this
  }

  /**
   * Webhook avatar override.
   *
   * @param url string
   * @returns this
   */
  public setAvatarUrl(url: string): Webhook {
    this.avatar_url = url
    return this
  }

  /**
   * Whether or not this notification should be read as text to speech.
   *
   * @param flag boolean
   * @returns this
   */
  public setTTS(flag: boolean): Webhook {
    this.tts = flag
    return this
  }

  /**
   * Message contents.
   *
   * @param content string
   * @returns this
   */
  public setContent(content: string): Webhook {
    this.content = content
    return this
  }

  /**
   * Embedded "rich" content.
   *
   * @param embed string
   * @returns this
   */
  public setEmbed(embed: Embed): Webhook {
    this.embeds?.push(embed.toObject())
    return this
  }

  /**
   * Contents of a file being sent.
   *
   * @param file Attachment | string
   * @returns this
   */
  public setFile(file: IAttachment | string): Webhook {
    this.file = file
    return this
  }

  /**
   * Send webhook
   */
  public send() {
    return this.client.request({
      method: 'POST',
      data: this.toObject(),
    })
  }

  /**
   * Modify the current webhook.
   */
  public modify(options: IWebhookParameter) {
    return this.client.request({
      method: 'PATCH',
      data: options,
    })
  }

  /**
   * Get the current webhook.
   */
  public get(): AxiosPromise<IWebhookResponse> {
    return this.client.request({
      method: 'GET',
    })
  }

  /**
   * Check whether or not the current webhook is valid.
   */
  public isValid(): Promise<boolean> {
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
