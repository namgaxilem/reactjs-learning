import { config } from 'config/config'

export const isStoredToken = (): boolean => {
    const user = localStorage.getItem(config.localStorage.userKey)
    console.log("isStoredToken", user)
    if (user) {
        return true
    }
    return false
}