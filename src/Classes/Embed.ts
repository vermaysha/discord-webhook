import {
  IAuthor,
  IField,
  IFooter,
  IEmbed,
  IImage,
  IProvider,
  IThumbnail,
  IVideo,
} from '../Interfaces'

export class Embed {
  /**
   * Title of the embed.
   * Up to 256 characters.
   */
  protected title?: string

  /**
   * Embed type.
   * (Always "rich" for webhook embeds)
   */
  protected type = 'rich'

  /**
   * URL of embed.
   */
  protected url?: string

  /**
   * Description of the embed.
   * Up to 2048 characters.
   */
  protected description?: string

  /**
   * ISO8601 timestamp of the embed content.
   */
  protected timestamp?: string

  /**
   * color code of the embed.
   */
  protected color?: number

  /**
   * Footer information.
   */
  protected footer?: IFooter

  /**
   * Image information.
   */
  protected image?: IImage

  /**
   * Thumbnail information.
   */
  protected thumbnail?: IThumbnail

  /**
   * Video information.
   */
  protected video?: IVideo

  /**
   * Provider information.
   */
  protected provider?: IProvider

  /**
   * Author information.
   */
  protected author?: IAuthor

  /**
   * Fields information.
   * Up to 25 fields.
   */
  protected fields?: Array<IField>

  /**
   * Set Title of the embed.
   *
   * @param title string
   * @returns this
   */
  public setTitle(title: string): Embed {
    this.title = title
    return this
  }

  /**
   * Set URL of embed.
   *
   * @param url string
   * @returns this
   */
  public setUrl(url: string): Embed {
    this.url = url
    return this
  }

  /**
   * Description of the embed.
   *
   * @param description string
   * @returns Embed
   */
  public setDescription(description: string): Embed {
    this.description = description
    return this
  }

  /**
   * Set ISO8601 timestamp of the embed content.
   *
   * @returns this
   */
  public setTimestamp(): Embed {
    this.timestamp = new Date().toISOString()
    return this
  }

  /**
   * Set color code of the embed.
   *
   * @param color - number | string
   * @returns this
   */
  public setColor(color: number | string): Embed {
    if (typeof color == 'string') {
      color = parseInt(color.toString().replace('#', ''), 16)
    }
    this.color = color
    return this
  }

  /**
   * Set Footer information.
   *
   * @param footer Footer
   * @returns this
   */
  public setFooter(footer: IFooter): Embed {
    this.footer = footer
    return this
  }

  /**
   * Set Image information
   *
   * @param image Image
   * @returns this
   */
  public setImage(image: IImage): Embed {
    this.image = image
    return this
  }

  /**
   * Set Thumbnail information
   *
   * @param thumbnail Thumbnail
   * @returns this
   */
  public setThumbnail(thumbnail: IThumbnail): Embed {
    this.thumbnail = thumbnail
    return this
  }

  /**
   * Set Video information
   *
   * @param video Video
   * @returns this
   */
  public setVideo(video: IVideo): Embed {
    this.video = video
    return this
  }

  /**
   * Set Provider information
   *
   * @param provider Provider
   * @returns this
   */
  public setProvider(provider: IProvider): Embed {
    this.provider = provider
    return this
  }

  /**
   * Set Author information
   *
   * @param author Author
   * @returns this
   */
  public setAuthor(author: IAuthor): Embed {
    this.author = author
    return this
  }

  /**
   * Set Field information
   * Maximum 25 fields
   *
   * @param field Field
   * @returns this
   */
  public addField(field: IField): Embed {
    if (typeof this.fields === 'undefined') this.fields = [field]
    else if (this.fields.length <= 25) this.fields?.push(field)

    return this
  }

  public setFields(fields: Array<IField>):Embed {
    if (typeof)
  }

  /**
   * Generate object based on input
   *
   * @returns IEmbed
   */
  public toObject(): IEmbed {
    return {
      title: this.title,
      type: 'rich',
      url: this.url,
      description: this.description,
      timestamp: this.timestamp,
      color: this.color,
      footer: this.footer,
      image: this.image,
      thumbnail: this.thumbnail,
      video: this.video,
      provider: this.provider,
      author: this.author,
      fields: this.fields,
    }
  }
}
