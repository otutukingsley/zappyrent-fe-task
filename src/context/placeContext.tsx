import { createContext } from "react"
import { Dispatch, State } from "./placeState"

const PlaceContext = createContext<{
  state: State
  dispatch: Dispatch
} | null>(null!)

export default PlaceContext
