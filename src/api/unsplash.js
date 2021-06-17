import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID j0zh7ISShZeRz2-0ypLuYuhM89ejeGM6pP3RzNq8JaU'
    }
})