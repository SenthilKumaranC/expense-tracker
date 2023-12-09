import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface ITransaction {
  id: string
  value: number
  reason: string
}

//1 Create Adapter
const entityAdapter = createEntityAdapter<ITransaction>({})
//2 Create Slice(Table) - Name , Initial State , CRUD methods
export const transactionsSlice = createSlice({
  name: "transactions",
  initialState: entityAdapter.getInitialState(),
  reducers: {
    addTransactions: entityAdapter.addMany,
    removeTransaction: entityAdapter.removeOne,
  },
})

export const { addTransactions, removeTransaction } = transactionsSlice.actions
//Get the table reference
//Parent Query
const selectTransactionsTable = (rootState: RootState) => rootState.transactions

//Pass the table reference to adapter and get all child queries
//Child Queries
export const { selectAll } = entityAdapter.getSelectors(selectTransactionsTable)

export default transactionsSlice
