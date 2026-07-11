import { create } from "zustand";

interface IUseSelectCar {
  selectCar: string;
  setSelectCar: (location: string) => void;
}

export const useSelectCar = create<IUseSelectCar>((set) => ({
  selectCar: "",
  setSelectCar: (location: string) => set(() => ({ selectCar: location })),
}));
