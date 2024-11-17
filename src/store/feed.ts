import { create } from "zustand"
import { IFeedItem } from "@/utils/types"

interface IFeedDataState {
  data: IFeedItem[]
  loading: boolean
  page: number
  setLoading: (isLoading: boolean) => void
  addData: (newData: IFeedItem[], newPage: number) => void
  resetData: () => void
}

export const useFeedData = create<IFeedDataState>((set) => ({
  data: [],
  loading: false,
  page: 1,
  setLoading: (isLoading: boolean) => set(() => ({ loading: isLoading })),
  addData: (newData: IFeedItem[], newPage: number) =>
    set((state) => ({
      data: [...state.data, ...newData],
      loading: false,
      page: newPage,
    })),
  resetData: () => set(() => ({ data: [], loading: false, page: 1 })),
}))
