import { create } from "zustand";

export const userdata = create((set) => {
    return {
        user: null,
        setUser: (user) => set({ user }),
    };
});