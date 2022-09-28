import { defineStore } from 'pinia'

export const useAuthStore  = defineStore('auth', {
    state: () => {
        return {
            user: null,
        }
    },
    actions: {
        setUser(userData) {
            this.user = userData
        }
    }
})

/**
 * 
 * { user: null, setUser: () => {}}
 */