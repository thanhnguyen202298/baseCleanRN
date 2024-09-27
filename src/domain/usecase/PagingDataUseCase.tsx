import React, { useCallback, useEffect } from "react"
import { useQuery } from "react-query"
import { MockApi } from "../../data/api/api"

export default function useApiPaging(keyFn: any, api: (page: number) => void, defaultPage = 0) {

    const [page, setPage] = React.useState(defaultPage)
    const {
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData,
    } = useQuery([keyFn, page], () => api(page), { keepPreviousData: true })

    const prevPage = useCallback(() => {
        setPage(old => Math.max(old - 1, 0))
    }, [setPage, isPreviousData])

    const nextPage = useCallback(() => {
        if (!isPreviousData && data?.hasMore) { setPage(old => old + 1) }
    }, [setPage, data])

    return {
        isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData, nextPage, prevPage, page
    }
}

export function useFetchPageMock() {
    return useApiPaging("KeypagingMock", MockApi.paging)
}