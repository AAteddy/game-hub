import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2a2b517017d846b69f7800cc23687ba2'
    }
})