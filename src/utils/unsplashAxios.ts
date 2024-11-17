import axios from "axios"

const UNSPLASH_BASE_URL = process.env.NEXT_PUBLIC_UNSPLASH_BASE_URL || ""
const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || ""

const unsplashAxios = axios.create({
  baseURL: UNSPLASH_BASE_URL,
})

unsplashAxios.defaults.headers.common[
  "Authorization"
] = `Client-ID ${UNSPLASH_ACCESS_KEY}`

// Uncomment to test laoding states
// unsplashAxios.interceptors.request.use(
//   async (config) => {
//     await new Promise((resolve) => setTimeout(resolve, 3000))
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )

export default unsplashAxios
