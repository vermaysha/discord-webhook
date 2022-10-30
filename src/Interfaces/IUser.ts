export interface IUser {
  /**
   * User ID
   * Snowflake
   */
  id: string

  /**
   * User's username.
   * Not unique across the platform.
   */
  username: string

  /**
   * The user's 4-digit discord-tag
   */
  discriminator: string

  /**
   * User's avatar hash.
   */
  avatar: string

  /**
   * Whether or not the user belongs to an OAuth2 application.
   */
  bot?: boolean

  /**
   * whether the user is an Official Discord System user (part of the urgent message system)
   */
  system?: boolean

  /**
   * Whether or not the user has two-factor authentication enabled.
   */
  mfa_enabled?: boolean

  /**
   * the user's banner hash
   */
  banner?: string

  /**
   * the user's banner color encoded as an integer representation of hexadecimal color code
   */
  accent_color?: number

  /**
   * The user's chosen language option.
   */
  locale?: string

  /**
   * Whether or not the user has verified their email address.
   */
  verified?: string

  /**
   * The user's email address.
   */
  email?: string

  /**
   * The flags on the user's account.
   *
   * @link https://discordapp.com/developers/docs/resources/user#user-object-user-flags
   */
  flags?: number

  /**
   * User's Nitro subscription type.
   */
  premium_type: number

  /**
   * the public flags on a user's account
   */
  public_flags?: number
}
