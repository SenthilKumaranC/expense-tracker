import "./App.css"
import { useEffect, useMemo } from "react"

import { Transaction } from "./components/Transaction/Transaction"
import axios from "axios"
import {
  addTransactions,
  selectAll,
} from "./features/transactions/transactions.slice"
import { useDispatch, useSelector } from "react-redux"

function App() {
  const transactions = useSelector(selectAll)

  const dispatch = useDispatch()

  useEffect(() => {
    const abortController = new AbortController()
    axios
      .get("http://localhost:4444/transactions", {
        signal: abortController.signal,
      })
      .then((result) => {
        console.log(result.data)
        dispatch(addTransactions(result.data))
      })
    return () => {
      abortController.abort()
    }
  }, [dispatch])

  const transactionsUI = useMemo(() => {
    return transactions.map((transaction, index) => {
      return (
        <Transaction
          index={index}
          key={transaction.id}
          {...transaction}
        ></Transaction>
      )
    })
  }, [transactions])
  return (
    <div className="App w-screen h-screen flex flex-col gap-4">
      {transactionsUI}
    </div>
  )
}

export default App
