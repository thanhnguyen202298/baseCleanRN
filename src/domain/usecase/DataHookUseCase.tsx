import { useEffect } from "react"
import { useGetData } from "../../data/api/Query"
import useStore from "../../data/store"

export default function UseCaseHookDataStore() {
    const { data: apiData, isLoading } = useGetData()
    const { setData, dataState } = useStore()

    useEffect(() => {
        if (apiData) {
            setData(apiData)
        }
    }, [setData, apiData])

    useEffect(() => {
        if (!isLoading) {
            console.log("apiupdate", dataState);
        }
    }, [dataState])

    return {dataState, isLoading}
}