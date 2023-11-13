import { create } from "zustand";

type ReactQueryDevToolStore = {
  show: boolean;
  setShow: (show: boolean) => void;
};

export const useReactQueryDevTool = create<ReactQueryDevToolStore>()((set) => ({
  show: false,
  setShow: (show) => set({ show }),
}));
