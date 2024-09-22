import { create, StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { mmKVStorage } from "./MMStorageKV";
import { isLoading, isOnPopup } from "..";

const devPersistMiddle = (f: (set: any) => DBState) =>
    devtools(persist(f,
        {
            name: 'DBStore',
            storage: createJSONStorage(() => mmKVStorage)
        }))

const initConfig: Config = {
    locale: "en",
    timeZone: "+0",
    language: "en-US",
    enabledNotify: false,
    currency: "USD"
}

const defaultDBState: DBState = {
    //props
    user: undefined,
    data: undefined,
    permissions: new Map(),
    configs: initConfig,
    //dispachers
    setPermissions: null,
    setUser: null,
    setData: null,
    resetData: null,
    setConfigs: undefined,
    resetConfig: null,
}

const defaultUiState: UIState = {
    isLoading: false,
    isOnPopup: false,

    setIsLoading: null,
    setIsOnPopup: null,
}

const useUiStore = create<UIState>()(
    devtools((set) => ({
        ...defaultUiState,
        setIsLoading: (isLoading) => set({ isLoading }),
        setIsOnPopup: (isOnPopup) => set({ isOnPopup })
    }))
)

const useDBStore = create<DBState>()(
    devPersistMiddle((set) => ({
        ...defaultDBState,
        setUser: (user: UserInfo) =>
            set({ user }),
        setData: (data: any) =>
            set({ data }),

        setPermissions: (permissions: Map<string, boolean>) =>
            set({ permissions }),

        setConfigs: (configs: Config) => set({ configs }),

        resetData: () =>
            set({ data: undefined }),
        resetConfig: () =>
            set({ configs: initConfig }),

    }
    ))
)

const useStore = create<IStore>()(
    (set) => ({
        ...useDBStore.getState(),
        ...useUiStore.getState()
    })
)

export default useStore;