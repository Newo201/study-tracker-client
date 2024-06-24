import { useCallback, useEffect, useState } from "react";

export default function useAsync(callback, dependencies = []) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [value, setValue] = useState()

    // Setting up the callback
    const callbackMemoized = useCallback(() => {
        setLoading(true)
        setError(undefined)
        setValue(undefined)
        callback()
            .then((response) => {
                console.log(response)
                setValue(response)
            })
            .catch(setError)
            .finally(() => setLoading(false))
    }, [...dependencies, callback])

    // Calling the callback
    useEffect(() => {
        callbackMemoized()
    }, [callbackMemoized])

    useEffect(() => {
        console.log(value)
    }, [value])

    return {loading, error, value}
}