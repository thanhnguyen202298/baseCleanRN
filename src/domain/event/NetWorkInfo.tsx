import NetInfo from '@react-native-community/netinfo'
import { onlineManager } from 'react-query'
//auto refresh react-query if Online again
export const useActiveNet = () => onlineManager.setEventListener(setOnline => {
    return NetInfo.addEventListener(state => {
        setOnline(state.isConnected || undefined)
    })
})