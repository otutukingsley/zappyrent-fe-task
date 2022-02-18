import { useReducer } from "react"
import type { ReactNode } from "react"
import ProductContext from "./productContext"
import productReducer from "./productReducer"

export interface Action {
  type: string
  payload?: any
}
export interface State {
  loading: boolean
  single: boolean
  dropLoading: boolean
  error: string
  items: any
  item: any
  dropdownItems: any
  selected: any
}
export type Dispatch = (action: Action) => void

const initialState = {
  loading: true,
  error: null,
  items: [],
  dropdownItems: [],
  item: null,
  single: true,
  dropLoading: true,
  selected: [],
}

export function ProductState({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(productReducer, initialState)
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  )
}
