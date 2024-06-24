import axios from "axios"
import useAsync from "./useAsync"

export default function useAxiosMultiple(requests, dependencies = []) {
    return useAsync(() => {
        return axios.all(requests.map(request => axios({...request})))
            .then(responses => {
                console.log(responses)
                return responses.map(response => response.data)
            })
    }, dependencies)

    // axios.all(requests.map(request => axios({...request})))
    //     .then(responses => {
    //         // console.log(responses)
    //         return responses.map(response => response.data)
    // })
}