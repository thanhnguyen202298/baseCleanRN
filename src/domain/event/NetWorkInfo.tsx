import NetInfo from '@react-native-community/netinfo'
import { onlineManager } from 'react-query'

export const useActiveNet = () => onlineManager.setEventListener(setOnline => {
    return NetInfo.addEventListener(state => {
        setOnline(state.isConnected || undefined)
    })
})