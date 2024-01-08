import { create } from "zustand";

const useInsuranceOffers = create((set) => ({
  userInfo: {},
  offers: [],
  selectedOffer: null,
  updateUserInfo: (data) => set((state) => ({ ...state, userInfo: data })),
  updateInsuranceOffers: (data) => set((state) => ({ ...state, offers: data })),
  selectOffer: (id) => set((state) => ({ ...state, selectedOffer: id })),
}));

export default useInsuranceOffers;
