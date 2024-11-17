import { create } from "zustand"
import { IFeedItem } from "@/utils/types"

interface IOverlayDataState {
  overlayItem: IFeedItem | null
  loading: boolean
  setOverlayItem: (item: IFeedItem | null) => void
  setLoading: (loading: boolean) => void
}

export const useImageOverlay = create<IOverlayDataState>((set) => ({
  overlayItem: null,
  loading: true,
  setOverlayItem: (item: IFeedItem | null) =>
    set({ overlayItem: item, loading: !!item }),
  setLoading: (loading: boolean) => set({ loading }),
}))
