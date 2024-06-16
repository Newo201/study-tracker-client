import useAsync from "./useAsync"
import axios from "axios"

export default function useFetch(url, options = {}, dependencies = []) {
    return useAsync(() => {
        return axios({url: url, ...options})
            .then(res => {
                console.log(res)
                if (res.status === 200) return res.data
                // Need to figure out how to return an error here
                return "Error"
            })  
    }, dependencies)
}