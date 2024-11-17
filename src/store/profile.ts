import { create } from "zustand"
import { IUserProfile } from "@/utils/types"

interface IProfileDataState {
  data: IUserProfile | null
  loading: boolean
  setLoading: (isLoading: boolean) => void
  setData: (newData: IUserProfile) => void
}

export const useProfileData = create<IProfileDataState>((set) => ({
  data: null,
  loading: false,
  setLoading: (isLoading: boolean) => set(() => ({ loading: isLoading })),
  setData: (newData: IUserProfile) =>
    set(() => ({
      data: newData,
      loading: false,
    })),
}))
