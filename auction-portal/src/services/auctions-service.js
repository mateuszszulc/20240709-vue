
import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost:3000'
})

export const auctionsService = {
    getAll() {
        return client.get('/auctions')
    }
}