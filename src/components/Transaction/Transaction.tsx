import { motion, useAnimate } from "framer-motion"
import { ITransaction } from "../../App"
import { useEffect, useState } from "react"

export interface ITransactionProps extends ITransaction {
  index: number
}

export const Transaction = (props: ITransactionProps) => {
  const { index, reason, value } = props
  const [scope, animate] = useAnimate()
  const [hover, setHover] = useState(false)

  useEffect(() => {
    if (hover) {
      animate(scope.current, { opacity: 1, from: { opacity: 0 } })
    } else {
      animate(scope.current, { opacity: 0 })
    }
  }, [animate, hover, scope])

  return (
    <motion.div
      className=" bg-white drop-shadow rounded-sm grid grid-cols-[7%_10%_1fr_1fr_3%] w-1/2 h-[30px]"
      onHoverStart={() => {
        console.log("hover")
        setHover(true)
      }}
      onHoverEnd={() => {
        setHover(false)
      }}
      whileHover={{ x: "10px" }}
    >
      {
        <motion.div
          ref={scope}
          className={`bg-red-700 text-white inline-block`}
        >
          x
        </motion.div>
      }
      <span>{index + 1}</span>
      <span>{reason}</span>
      <span>{value}</span>
      <span className={`${value > 0 ? "bg-green-500" : "bg-red-500"}`}></span>
    </motion.div>
  )
}
