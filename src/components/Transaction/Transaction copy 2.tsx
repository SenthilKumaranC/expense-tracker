import { motion, useAnimate } from "framer-motion"
import { ITransaction } from "../../App"
import { useCallback, useEffect, useState } from "react"
import { useOpacity } from "./useOpacity"

export interface ITransactionProps extends ITransaction {
  index: number
}

export const Transaction = (props: ITransactionProps) => {
  const { index, reason, value } = props
  const { scope, opacityOn, opacityOff } = useOpacity()
  const {
    scope: scope2,
    opacityOn: opacityOn2,
    opacityOff: opacityOff2,
  } = useOpacity()

  return (
    <motion.div
      className=" bg-white drop-shadow rounded-sm grid grid-cols-[7%_10%_1fr_1fr_3%] w-1/2 h-[30px]"
      onHoverStart={() => {
        opacityOn()
        opacityOn2()
      }}
      onHoverEnd={() => {
        opacityOff()
        opacityOff2()
      }}
      whileHover={{ x: "10px" }}
    >
      {
        <motion.button
          ref={scope}
          className={`bg-red-700 text-white  opacity-0 rounded-lg`}
          whileTap={{ scale: 0.8 }}
        >
          x
        </motion.button>
      }
      <span>{index + 1}</span>
      <span ref={scope2}>{reason}</span>
      <span>{value}</span>
      <span className={`${value > 0 ? "bg-green-500" : "bg-red-500"}`}></span>
    </motion.div>
  )
}
