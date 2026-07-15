import { create } from "zustand";

interface IShowMenu {
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
}

export const useShowMenu = create<IShowMenu>((set) => ({
  showMenu: false,
  setShowMenu: (value) => set(() => ({ showMenu: value })),
}));
