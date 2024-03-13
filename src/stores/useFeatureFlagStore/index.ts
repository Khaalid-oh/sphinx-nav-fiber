import { create } from 'zustand'

export type FeatureFlagStore = {
  trendingTopicsFlag: boolean
  queuedSourcesFlag: boolean
  GraphBlueprintFlag: boolean
  v2Flag: boolean
  setTrendingTopicsFlag: (val: boolean) => void
  setV2Flag: (val: boolean) => void
  setQueuedSourcesFlag: (val: boolean) => void
  setGraphBlueprintFlag: (val: boolean) => void
}

const defaultData: Omit<
  FeatureFlagStore,
  'setTrendingTopicsFlag' | 'setV2Flag' | 'setQueuedSourcesFlag' | 'setGraphBlueprintFlag'
> = {
  trendingTopicsFlag: true,
  queuedSourcesFlag: false,
  v2Flag: false,
  GraphBlueprintFlag: false,
}

export const useFeatureFlagStore = create<FeatureFlagStore>((set) => ({
  ...defaultData,
  setTrendingTopicsFlag: (trendingTopicsFlag) => set({ trendingTopicsFlag }),
  setV2Flag: (v2Flag) => set({ v2Flag }),
  setQueuedSourcesFlag: (queuedSourcesFlag) => set({ queuedSourcesFlag }),
  setGraphBlueprintFlag: (GraphBlueprintFlag) => set({ GraphBlueprintFlag }),
}))
