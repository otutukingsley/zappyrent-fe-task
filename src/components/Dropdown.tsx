import React, { FC, useState, useContext, useEffect } from "react"
import { FaAngleDown } from "react-icons/fa"
import ProductContext from "../context/placeContext/productContext"
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
import { REQUEST_URL } from "../context/constants"

type ImageType = {
  url: string
}[]

type ItemProps = {
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

type Link = {
  link: string
}
interface DropdownProps {
  requestLink: (options: string[]) => Link
}

const Dropdown: FC<DropdownProps> = ({ requestLink }) => {
  const context = useContext(ProductContext)
  const { state, dispatch } = context ? context : null!
  const { dropLoading, selected, dropdownItems } = state
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    const filterPlace = async () => {
      const { link } = requestLink(selected)
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
    //eslint-disable-next-line
  }, [dispatch, selected])

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        dispatch({
          type: actionTypes.GET_DROPDOWN_PLACES_REQUEST,
        })
        const { data } = await axios.get(REQUEST_URL)
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

  const handleMultipleSelect = (itemType: string) => {
    if (!selected.some((current: string) => current === itemType)) {
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

  const isItemSelected = (item: string) => {
    if (selected.find((current: string) => current === item)) {
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
                .map((item: ItemProps) => item.type)
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
