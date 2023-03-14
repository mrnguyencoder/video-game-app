import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '86e8b73f2c8648c980c24e7e9fb80ebc'
   } 
})