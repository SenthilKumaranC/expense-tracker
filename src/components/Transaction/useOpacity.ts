import { useAnimate } from "framer-motion"
import { useCallback } from "react"

export const useOpacity = () => {
  const [scope, animate] = useAnimate()

  const opacityOn = useCallback(() => {
    animate(scope.current, { opacity: 1 })
  }, [animate, scope])

  const opacityOff = useCallback(() => {
    animate(scope.current, { opacity: 0 })
  }, [animate, scope])

  return { scope, opacityOn, opacityOff }
}
