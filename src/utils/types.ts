export interface IUserProfile {
  id: string
  username: string
  name: string
  bio: string
  location: string
  profile_image: {
    small: string
    medium: string
    large: string
  }
}

export interface IFeedItem {
  id: string
  alt_description: string
  urls: {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
    small_s3: string
  }
  width: number
  height: number
  user: IUserProfile
}
