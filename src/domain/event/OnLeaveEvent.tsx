import React from 'react'
import { useFocusEffect } from '@react-navigation/native'
//when component is left out/focus
export function useComponentFocused() {
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