import axios from "axios"
import useAsync from "./useAsync"

export default function useAxiosMultiple(requests, dependencies = []) {
    return useAsync(() => {
        return axios.all(requests.map(request => axios({...request})))
            .then(responses => {
                console.log("Calling useAxiosMultiple")
                return responses.map(response => response.data)
            })
    }, dependencies)
}