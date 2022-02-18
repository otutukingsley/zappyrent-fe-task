import React, { FC, useState, useContext, useEffect } from "react"
import { FaAngleDown } from "react-icons/fa"
import PlaceContext from "../context/placeContext"
import * as actionTypes from "../context/types"
import axios from "axios"
import {
  FGselect,
  DownArrow,
  HouseChoices,
  HouseChoicesItem,
  CustomCheckBox,
  CheckboxInner,
  CheckboxIn,
} from "../styles/componentStyles/dropdown"

const Dropdown: FC = () => {
  const context = useContext(PlaceContext)
  const { state, dispatch } = context ? context : null!
  const { dropLoading, selected, dropdownItems, error } = state
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    const filterPlace = async () => {
      let link = `https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties?`

      // if (selected.length > 0) link += "?"

      selected.forEach((i: any) => {
        link += `type=${i}&`
      })
      if (localStorage.getItem("available") === "true" && selected.length > 0) {
        link += "&available=true"
      }

      if (
        localStorage.getItem("available") === "true" &&
        selected.length === 0
      ) {
        link += "available=true"
      }

      if (link[link.length - 1] === "&") link = link.slice(0, link.length - 1)

      try {
        dispatch({
          type: actionTypes.SEARCH_LOGS_REQUEST,
        })
        const { data } = await axios.get(link)
        dispatch({
          type: actionTypes.SEARCH_LOGS_SUCCESS,
          payload: data,
        })
      } catch (err: any) {
        dispatch({
          type: actionTypes.SEARCH_LOGS_ERROR,
          payload:
            err.response && err.response.data.message
              ? err.response.data.message
              : err.message,
        })
      }
    }

    filterPlace()
  }, [dispatch, selected])

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        dispatch({
          type: actionTypes.GET_DROPDOWN_PLACES_REQUEST,
        })
        const { data } = await axios.get(
          "https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties"
        )
        dispatch({
          type: actionTypes.GET_DROPDOWN_PLACES_SUCCESS,
          payload: data,
        })
      } catch (err: any) {
        dispatch({
          type: actionTypes.GET_DROPDOWN_PLACES_ERROR,
          payload:
            err.response && err.response.data.message
              ? err.response.data.message
              : err.message,
        })
      }
    }
    fetchPlaces()
  }, [dispatch])

  const toggle = () => {
    if (dropLoading) {
      return
    } else {
      setOpen(!open)
    }
  }

  const handleMultipleSelect = (itemType: any) => {
    if (!selected.some((current: any) => current === itemType)) {
      dispatch({
        type: actionTypes.ADD_SELECTED,
        payload: itemType,
      })
    } else {
      dispatch({
        type: actionTypes.REMOVE_SELECTED,
        payload: itemType,
      })
    }
  }

  const isItemSelected = (item: any) => {
    if (selected.find((current: any) => current === item)) {
      return true
    } else {
      return false
    }
  }

  return (
    <FGselect>
      <div
        tabIndex={0}
        role="button"
        onKeyPress={() => toggle()}
        onClick={() => toggle()}
      >
        <div>
          <p>
            {selected.length > 0 && selected.length <= 1
              ? selected[0]
              : selected.length > 1
              ? selected[0] + " +1"
              : "Tipologia"}
          </p>
        </div>
        <DownArrow>
          <FaAngleDown className={`arrow-down ${open ? "rotate-svg" : ""}`} />
        </DownArrow>
      </div>
      {open && (
        <>
          <HouseChoices>
            {!dropLoading &&
              dropdownItems.length > 0 &&
              dropdownItems
                .map((item: any) => item.type)
                .filter(
                  (item: string, index: number, array: string[]) =>
                    array.indexOf(item) === index
                )
                .map((itemType: string, index: number) => (
                  <HouseChoicesItem
                    key={itemType + index}
                    className="house-choices-item"
                  >
                    <CustomCheckBox
                      type="button"
                      onClick={() => {
                        handleMultipleSelect(itemType)
                      }}
                    >
                      <CheckboxIn>
                        <CheckboxInner
                          className={`checkbox-inner ${
                            isItemSelected(itemType)
                              ? "is-checked"
                              : "not-checked"
                          }`}
                        ></CheckboxInner>
                      </CheckboxIn>
                      <span>{itemType}</span>
                    </CustomCheckBox>
                  </HouseChoicesItem>
                ))}
          </HouseChoices>
        </>
      )}
    </FGselect>
  )
}

export default Dropdown
