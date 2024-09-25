import React from 'react'
import { useFocusEffect } from '@react-navigation/native'
//when component is left out
export function usComponentFocused() {
  const focusedRef = React.useRef(true)

  useFocusEffect(
    React.useCallback(() => {
      focusedRef.current = true

      return () => {
        focusedRef.current = false
      }
    }, []),
  )

  return {isViewFocused: focusedRef.current}
}