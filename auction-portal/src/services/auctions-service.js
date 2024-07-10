
import axios from 'axios'


const client = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
})

export const auctionsService = {
    getAll() {
        return client.get('/auctions')
    },
    getPromotions() {
        return client.get('/auctions?promoted=true')
    }
}