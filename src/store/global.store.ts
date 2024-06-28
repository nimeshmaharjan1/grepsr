import { create } from "zustand";

interface GlobalStoreState {
  showSidebar: boolean;
  setShowSidebar: (v: boolean) => void;
}

export const useGlobalStore = create<GlobalStoreState>()((set) => ({
  showSidebar: false,
  setShowSidebar: (v) => set(() => ({ showSidebar: v })),
}));
