import { Action, State } from "./placeState"
import * as actionTypes from "./types"
const placeReducer = (state: State, action: Action) => {
  switch (action.type) {
    case actionTypes.GET_PLACES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.GET_A_PLACE_REQUEST:
      return {
        ...state,
        single: true,
      }
    case actionTypes.GET_PLACES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      }
    case actionTypes.GET_PLACES_ERROR:
    case actionTypes.GET_A_PLACE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case actionTypes.GET_A_PLACE_SUCCESS:
      return {
        ...state,
        single: false,
        item: action.payload,
      }

    default:
      return state
  }
}

export default placeReducer
