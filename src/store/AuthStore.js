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
            localStorage.setItem('user', JSON.stringify(userData))
        },
    
    }
})

/**
 * 
 * { user: null, setUser: () => {}}
 */