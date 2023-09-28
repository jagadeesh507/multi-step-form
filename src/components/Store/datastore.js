import { create } from "zustand";

export const dataStore = create((set) => {
  return {
    state: 1,
    check: [],
    select: { service: "", planAmount: 0 },
    YrOrMo:"monthly",
    nextStep: () => set((val) => ({ state: val.state + 1 })),
    prevStep: () => set((val) => ({ state: val.state - 1 })),
    SelectData: (service, plan) => set({ select: { service, planAmount: plan } }),
    SelectYrOrMo:(YrOrMo) => set({YrOrMo}),
    CheckedData: (id,plan,srv) =>
      set((val) => ({
        check: val.check.includes(id)
          ? val.check.filter((service) => service.id!== id)
          : [...val.check, {id,plan,srv}],
      })),
  };
 
});
