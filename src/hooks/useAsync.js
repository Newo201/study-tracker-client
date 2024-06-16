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
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false))
    }, dependencies)

    // Calling the callback
    useEffect(() => {
        callbackMemoized()
    }, [callbackMemoized])

    return {loading, error, value}
}