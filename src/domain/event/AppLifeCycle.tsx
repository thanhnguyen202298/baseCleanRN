import { useEffect } from 'react'
import { AppState, AppStateStatus, Platform } from 'react-native'
import { focusManager } from 'react-query'

function onAppStateChange(status: AppStateStatus) {
    if (Platform.OS !== 'web') {
        focusManager.setFocused(status === 'active')//auto refetch data
    }
}
//auto refresh if window focus
export const useWatchAppState = () => useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange)// handle app status:forground/background

    return () => subscription.remove()
}, [])