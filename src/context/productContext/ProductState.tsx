import { useReducer } from "react"
import type { ReactNode } from "react"
import ProductContext from "./productContext"
import productReducer from "./productReducer"

export type ImageType = {
  url: string
}[]

export type ItemProps = {
  available: boolean
  baths: number
  beds: number
  cap: string
  city: string
  country: string
  currency: string
  description: string
  floor: number
  id: number
  images: ImageType
  price: number
  province: string
  street: string
  street_number: number
  tenants: number
  title: string
  type: string
}

export interface Action {
  type: string
  payload?: any
}
export interface State {
  loading: boolean
  single: boolean
  dropLoading: boolean
  error: string
  items: ItemProps[]
  item: any
  dropdownItems: ItemProps[]
  selected: string[]
  available: boolean
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
  available: false,
}

export function ProductState({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(productReducer, initialState)
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  )
}
