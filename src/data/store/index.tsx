import useStore from "./db/DBStore";

export const { user, setUser } = useStore()
export const { isLoading, isOnPopup, setIsLoading, setIsOnPopup } = useStore()
export const { permissions, setPermissions } = useStore()
export const { data, setData } = useStore()
export const { configs, setConfigs } = useStore()

export default useStore