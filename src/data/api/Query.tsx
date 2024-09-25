import { useQueries, useQuery } from "react-query";
import { MockApi } from "./api";

export const keyGetData = 'key-get'
export const keyPostData = 'key-post'
export const useGetData= () => useQuery([keyGetData], MockApi.get)
export const usePostData= () => useQuery([keyPostData], MockApi.post)