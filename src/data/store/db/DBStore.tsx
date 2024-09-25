import { create } from "zustand";
import { combine, createJSONStorage, devtools, persist } from "zustand/middleware";
import EncryptedStorage from "react-native-encrypted-storage";

const devPersistMiddle = (f: (set: any) => DBState) =>
    devtools(persist(f,
        {
            name: 'DBStore',
            storage: createJSONStorage(() => EncryptedStorage)
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
    user: {},
    dataState: {},
    permissions: new Map(),
    configs: initConfig,
    //dispachers
    setPermissions: (d)=>{},
    setUser: (d)=>{},
    setData: (d)=>{},
    resetData: ()=>{},
    setConfigs: (d)=>{},
    resetConfig: ()=>{},
}

const defaultUiState: UIState = {
    isLoading: false,
    isOnPopup: false,

    isOnline: false,
    isAppActive: false,
    
    setIsLoading: (d) => { },
    setIsOnPopup: (d) => { },
}

export const useUiStore = create<UIState>()(
    devtools((set) => ({
        ...defaultUiState,
        setIsLoading: (isLoading) => set({ isLoading }),
        setIsOnPopup: (isOnPopup) => set({ isOnPopup })
    }))
)

export const useDBStore = create<DBState>()(
    devPersistMiddle((set) => ({
        ...defaultDBState,
        setUser: (user: UserInfo) =>
            set({ user }),
        setData: (dataState: any) =>
            set({ dataState }),

        setPermissions: (permissions: Map<string, boolean>) =>
            set({ permissions }),

        setConfigs: (configs: Config) => set({ configs }),

        resetData: () =>
            set({ dataState: {} }),
        resetConfig: () =>
            set({ configs: initConfig }),

    }
    ))
)