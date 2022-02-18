import { Action, State } from "./placeState"
import * as actionTypes from "./types"
const placeReducer = (state: State, action: Action) => {
  switch (action.type) {
    case actionTypes.GET_PLACES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.GET_DROPDOWN_PLACES_REQUEST:
      return {
        ...state,
        dropLoading: true,
      }

    case actionTypes.SEARCH_LOGS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.AVAILABLE_LOGS_REQUEST:
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
    case actionTypes.GET_DROPDOWN_PLACES_SUCCESS:
      return {
        ...state,
        dropLoading: false,
        dropdownItems: action.payload,
      }
    case actionTypes.SEARCH_LOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      }
    case actionTypes.AVAILABLE_LOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      }
    case actionTypes.GET_PLACES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case actionTypes.GET_A_PLACE_ERROR:
      return {
        ...state,
        single: false,
        error: action.payload,
      }

    case actionTypes.AVAILABLE_LOGS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case actionTypes.SEARCH_LOGS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case actionTypes.GET_DROPDOWN_PLACES_ERROR:
      return {
        ...state,
        dropLoading: false,
        error: action.payload,
      }

    case actionTypes.GET_A_PLACE_SUCCESS:
      return {
        ...state,
        single: false,
        item: action.payload,
      }
    case actionTypes.ADD_SELECTED:
      return {
        ...state,
        selected: [...state.selected, action.payload],
      }
    case actionTypes.REMOVE_SELECTED:
      let removedSelected = state.selected
      return {
        ...state,
        selected: removedSelected.filter(
          (current: any) => current !== action.payload
        ),
      }
    case actionTypes.STORE_LINK_STATE:
      return {
        ...state,
        link: action.payload,
      }

    default:
      return state
  }
}

export default placeReducer
