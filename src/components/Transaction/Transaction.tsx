import { motion } from "framer-motion"
import { ITransaction } from "../../App"
import { useState } from "react"

export interface ITransactionProps extends ITransaction {
  index: number
}

export const Transaction = (props: ITransactionProps) => {
  const { index, reason, value } = props
  const [hover, setHover] = useState(false)
  return (
    <motion.div
      className=" bg-slate-500 drop-shadow rounded-sm grid grid-cols-[7%_10%_1fr_1fr_3%] w-1/2 h-[30px]"
      onHoverStart={() => {
        console.log("hover")
        setHover(true)
      }}
      onHoverEnd={() => {
        setHover(false)
      }}
    >
      {
        <span className={`bg-red-700 text-white ${!hover && "invisible"}`}>
          x
        </span>
      }
      <span>{index + 1}</span>
      <span>{reason}</span>
      <span>{value}</span>
      <span className={`${value > 0 ? "bg-green-500" : "bg-red-500"}`}></span>
    </motion.div>
  )
}
