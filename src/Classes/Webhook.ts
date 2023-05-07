import axios, { AxiosPromise } from 'axios'
import type {
  IAttachment,
  IEmbed,
  IWebhook,
  IWebhookParameter,
  IWebhookResponse,
} from '../Interfaces'
import { Embed } from './Embed'
import { Request } from './Request'

export class Webhook {
  protected client: Request

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
    this.client = new Request(
      axios.create({
        baseURL: webhookUrl,
      }),
    )
  }

  /**
   * Set Webhook username override.
   *
   * @param username string
   * @returns Embed
   */
  public setUsername(username: string): Webhook {
    this.username = username
    return this
  }

  /**
   * Set Webhook avatar override.
   *
   * @param url string
   * @returns Embed
   */
  public setAvatarUrl(url: string): Webhook {
    this.avatar_url = url
    return this
  }

  /**
   * Set Whether or not this notification should be read as text to speech.
   *
   * @param flag boolean
   * @returns Embed
   */
  public setTTS(flag: boolean): Webhook {
    this.tts = flag
    return this
  }

  /**
   * Set Message contents.
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
   * Set Contents of a file being sent.
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
   *
   * @returns AxiosPromise<any>
   */
  public async send() {
    return this.client
      .send('POST', this.toObject())
      .then((res) => res)
      .catch((err) => {
        throw new Error(err?.response?.data?.message ?? err)
      })
  }

  /**
   * Modify the current webhook.
   *
   * @param options IWebHookParameter
   * @returns AxiosPromise<IWebhookResponse>
   */
  public async modify(
    options: IWebhookParameter,
  ): AxiosPromise<IWebhookResponse> {
    return this.client
      .send('PATCH', options)
      .then((res) => res as AxiosPromise<IWebhookResponse>)
      .catch((err) => {
        throw new Error(err?.response?.data?.message ?? err)
      })
  }

  /**
   * Get the current webhook.
   *
   * @returns AxiosPromise<IWebhookResponse>
   */
  public async get(): AxiosPromise<IWebhookResponse> {
    return this.client
      .send('GET', '')
      .then((res) => res as AxiosPromise<IWebhookResponse>)
      .catch((err) => {
        throw new Error(err?.response?.data?.message ?? err)
      })
  }

  /**
   * Check whether or not the current webhook is valid.
   *
   * @returns Promise<boolean>
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
