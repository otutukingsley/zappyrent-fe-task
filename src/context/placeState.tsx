import { useReducer } from "react"
import type { ReactNode } from "react"
import PlaceContext from "./placeContext"
import placeReducer from "./placeReducer"

export interface Action {
  type: string
  payload?: any
}
export interface State {
  loading: boolean
  single: boolean
  error: string
  items: any
  item: any
}
export type Dispatch = (action: Action) => void

const initialState = {
  loading: true,
  error: null,
  items: [],
  item: null,
  single: true,
}

export function PlaceState({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(placeReducer, initialState)
  return (
    <PlaceContext.Provider value={{ state, dispatch }}>
      {children}
    </PlaceContext.Provider>
  )
}
