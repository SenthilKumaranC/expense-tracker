import { motion } from "framer-motion"
import { useOpacity } from "./useOpacity"
import {
  ITransaction,
  removeTransaction,
} from "../../features/transactions/transactions.slice"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import axios from "axios"

export interface ITransactionProps extends ITransaction {
  index: number
}

export const Transaction = (props: ITransactionProps) => {
  const { index, reason, value, id } = props
  const { scope, opacityOn, opacityOff } = useOpacity()

  const dispatch = useDispatch()

  const removeTransactionHandler = useCallback(() => {
    axios.delete(`http://localhost:4444/transactions/${id}`).then((result) => {
      console.log(result.data)
      dispatch(removeTransaction(result.data))
    })
  }, [dispatch, id])

  return (
    <motion.div
      className=" bg-white drop-shadow rounded-sm grid grid-cols-[7%_10%_1fr_1fr_3%] w-1/2 h-[30px]"
      onHoverStart={opacityOn}
      onHoverEnd={opacityOff}
      whileHover={{ x: "10px" }}
    >
      {
        <motion.button
          onClick={removeTransactionHandler}
          ref={scope}
          className={`bg-red-700 text-white  opacity-0 rounded-lg`}
          whileTap={{ scale: 0.8 }}
        >
          x
        </motion.button>
      }
      <span>{index + 1}</span>
      <span>{reason}</span>
      <span>{value}</span>
      <span className={`${value > 0 ? "bg-green-500" : "bg-red-500"}`}></span>
    </motion.div>
  )
}
