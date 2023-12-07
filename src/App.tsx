import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import "./App.css"
import { useMemo, useState } from "react"
import { v4 } from "uuid"

import { Transaction } from "./components/Transaction/Transaction"

export interface ITransaction {
  id: string
  value: number
  reason: string
}

function App() {
  const [transactions] = useState<ITransaction[]>([
    {
      id: v4(),
      value: 2000,
      reason: "lottery",
    },
    {
      id: v4(),
      value: 10000,
      reason: "income",
    },
    {
      id: v4(),
      value: -2000,
      reason: "cinema",
    },
  ])

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
