import { create } from 'zustand'

export const useLayoutStore = create((set) => ({
  leftSidebarCollapsed: false,
  toggleLeftSidebar: () => set((state) => ({ leftSidebarCollapsed: !state.leftSidebarCollapsed })),
}))