import { create } from 'zustand'

interface User {
    id: string
    firstname: string
    lastname: string
    email: string
}

interface UserState {
    user: User | null
    setUser: (user: User) => void
    clearUser: () => void
}

export const useUserStore = create<UserState>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    clearUser: () => set({ user: null }),
}))