import { MMKV } from "react-native-mmkv";
import Async from "../../../utils/AsyncCreator";

const encryptKeyGen = "encrypteMyDB"
const storageKV = new MMKV({
    id: 'secure-db',
    encryptionKey: encryptKeyGen
})

export const mmKVStorage = {
    setItem: async (key: string, value: string) =>
        Async<boolean>(() => { storageKV.set(key, value); return true }),
    getItem: async (key: string) =>
        Async<string | null>(() => storageKV.getString(key) || null),
    removeItem: async (key: string) =>
        Async<boolean>(() => { storageKV.delete(key); return true })

}