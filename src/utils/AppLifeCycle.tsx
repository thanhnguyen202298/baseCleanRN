import { useEffect } from 'react'
import { AppState, AppStateStatus, Platform } from 'react-native'
import { focusManager } from 'react-query'

function onAppStateChange(status: AppStateStatus) {
    if (Platform.OS !== 'web') {
        focusManager.setFocused(status === 'active')
    }
}

export const useWatchAppState = () => useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange)

    return () => subscription.remove()
}, [])