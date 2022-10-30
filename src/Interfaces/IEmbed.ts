import { IAuthor } from './IAuthor'
import { IField } from './IField'
import { IFooter } from './IFooter'
import { IImage } from './IImage'
import { IProvider } from './IProvider'
import { IThumbnail } from './IThumbnail'
import { IVideo } from './IVideo'

export interface IEmbed {
  /**
   * Title of the embed.
   * Up to 256 characters.
   */
  title?: string

  /**
   * Embed type.
   * (Always "rich" for webhook embeds)
   */
  type?: 'rich'

  /**
   * URL of embed.
   */
  url?: string

  /**
   * Description of the embed.
   * Up to 2048 characters.
   */
  description?: string

  /**
   * ISO8601 timestamp of the embed content.
   */
  timestamp?: string

  /**
   * color code of the embed.
   */
  color?: number

  /**
   * Footer information.
   */
  footer?: IFooter

  /**
   * Image information.
   */
  image?: IImage

  /**
   * Thumbnail information.
   */
  thumbnail?: IThumbnail

  /**
   * Video information.
   */
  video?: IVideo

  /**
   * Provider information.
   */
  provider?: IProvider

  /**
   * Author information.
   */
  author?: IAuthor

  /**
   * Fields information.
   * Up to 25 fields.
   */
  fields?: Array<IField>
}
