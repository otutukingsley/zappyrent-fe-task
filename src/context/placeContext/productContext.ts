import { createContext } from "react"
import { Dispatch, State } from "./ProductState"

const ProductContext = createContext<{
  state: State
  dispatch: Dispatch
} | null>(null!)

export default ProductContext
