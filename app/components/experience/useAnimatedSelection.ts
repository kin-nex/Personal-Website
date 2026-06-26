import { useEffect, useRef, useState } from 'react'

export const useAnimatedSelection = <T,>(
  selected: T | undefined,
  timeout = 500,
  immediateSwap = false
) => {
  const [state, setState] = useState<{
    rendered: T | undefined
    isVisible: boolean
  }>({
    rendered: selected,
    isVisible: false,
  })
  const stateRef = useRef(state)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  )
  const frameRef = useRef<number | undefined>(undefined)

  const setAnimatedState = (value: typeof state) => {
    stateRef.current = value
    setState(value)
  }

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    if (frameRef.current) cancelAnimationFrame(frameRef.current)

    if (!selected) {
      setAnimatedState({ rendered: stateRef.current.rendered, isVisible: false })
      timeoutRef.current = setTimeout(
        () => setAnimatedState({ rendered: undefined, isVisible: false }),
        timeout
      )
      return
    }

    if (!stateRef.current.rendered) {
      setAnimatedState({ rendered: selected, isVisible: false })
      frameRef.current = requestAnimationFrame(() =>
        setAnimatedState({ rendered: selected, isVisible: true })
      )
      return
    }

    if (stateRef.current.rendered === selected) {
      setAnimatedState({ rendered: selected, isVisible: true })
      return
    }

    if (immediateSwap) {
      setAnimatedState({ rendered: selected, isVisible: false })
      frameRef.current = requestAnimationFrame(() =>
        setAnimatedState({ rendered: selected, isVisible: true })
      )
      return
    }

    setAnimatedState({
      rendered: stateRef.current.rendered,
      isVisible: false,
    })
    timeoutRef.current = setTimeout(() => {
      setAnimatedState({ rendered: selected, isVisible: false })
      frameRef.current = requestAnimationFrame(() =>
        setAnimatedState({ rendered: selected, isVisible: true })
      )
    }, timeout)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [immediateSwap, selected, timeout])

  return state
}
