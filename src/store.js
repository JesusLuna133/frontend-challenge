import { create } from "zustand";

export const useStore = create((set) => ({
  rowData: [],
  setRowData: (data) => set({ rowData: data }),
}));

export const useModalStore = create((set) => ({
  showModal: false,
  setShowModal: (value) => set({ showModal: value }),
}));


