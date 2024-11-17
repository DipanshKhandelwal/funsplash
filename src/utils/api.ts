import { AxiosResponse } from "axios"
import unsplashAxios from "./unsplashAxios"
import { IFeedItem, IUserProfile } from "./types"

// Fetch User Profile
export async function fetchUserProfile(
  username: string
): Promise<IUserProfile> {
  try {
    const userProfileResponse: AxiosResponse<IUserProfile> =
      await unsplashAxios.get(`/users/${username}`)
    return userProfileResponse.data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error.message || "Error fetching user profile")
  }
}

export async function fetchUserPhotos(
  username: string,
  page: number
): Promise<IFeedItem[]> {
  try {
    const userPhotosResponse: AxiosResponse<IFeedItem[]> =
      await unsplashAxios.get(`/users/${username}/photos`, {
        params: { page },
      })
    return userPhotosResponse.data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error.message || "Error fetching user photos")
  }
}

export async function fetchFeed(page: number): Promise<IFeedItem[]> {
  try {
    const photosResponse: AxiosResponse<IFeedItem[]> = await unsplashAxios.get(
      `/photos`,
      {
        params: { page },
      }
    )
    return photosResponse.data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error.message || "Error fetching photos")
  }
}
