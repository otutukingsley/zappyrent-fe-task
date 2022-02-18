import React, { FC, useState, useContext, useEffect } from "react"
import { FaAngleDown } from "react-icons/fa"
import PlaceContext from "../context/placeContext"
import * as actionTypes from "../context/types"
import axios from "axios"

interface Props {
  multiple: boolean
}

const Dropdown: FC<Props> = ({ multiple }) => {
  const context = useContext(PlaceContext)
  const { state, dispatch } = context ? context : null!
  const { loading, items } = state
  const [open, setOpen] = useState<boolean>(false)
  const [selected, setSelected] = useState<any>([])
  const [load, setLoad] = useState<boolean>(true)
  const [dropDownItems, setDropDownItems] = useState<any>([])
  const [error, setError] = useState<any>("")

  useEffect(() => {
    const filterPlace = async () => {
      let link = `https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties`
      if (selected.length > 0) link += "?"
      selected.forEach((i: any) => {
        link += `type=${i}&`
      })

      if (link[link.length - 1] === "&") link = link.slice(0, link.length - 1)
      //store the link in local storage
      //check if available in local measuring//
      //if available append the link and request it
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
        setLoad(true)
        const { data } = await axios.get(
          "https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties"
        )
        setDropDownItems(data)
        setLoad(false)
      } catch (err: any) {
        if (err.response && err.response.data.message) {
          setError(err.response.data.message)
        } else {
          setError(err.message)
        }
      }
    }
    fetchPlaces()
  }, [dispatch])

  const toggle = () => {
    if (load) {
      return
    } else {
      setOpen(!open)
    }
  }

  const handleMultipleSelect = (itemType: any) => {
    if (!selected.some((current: any) => current === itemType)) {
      setSelected([...selected, itemType])
    } else {
      let selectionAfterRemove: any = selected
      selectionAfterRemove = selectionAfterRemove.filter(
        (current: any) => current !== itemType
      )
      setSelected([...selectionAfterRemove])
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
    <div className="form-group-select">
      <div
        tabIndex={0}
        role="button"
        onKeyPress={() => toggle()}
        onClick={() => toggle()}
      >
        <div className="">
          <p>Tipologia</p>
        </div>
        <div className="dropdown-arrow">
          <FaAngleDown className={`arrow-down ${open ? "rotate-svg" : ""}`} />
        </div>
      </div>
      {open && (
        <>
          <ul className="house-choices">
            {!load &&
              dropDownItems.length > 0 &&
              dropDownItems
                .map((item: any) => item.type)
                .filter(
                  (item: string, index: number, array: string[]) =>
                    array.indexOf(item) === index
                )
                .map((itemType: string, index: number) => (
                  <li key={itemType + index} className="house-choices-item">
                    <button
                      type="button"
                      className="custom-btn-checkbox"
                      onClick={() => {
                        handleMultipleSelect(itemType)
                      }}
                    >
                      <div className="check-box isChecked">
                        <div
                          className={`checkbox-inner ${
                            isItemSelected(itemType)
                              ? "is-checked"
                              : "not-checked"
                          }`}
                        ></div>
                      </div>
                      <span>{itemType}</span>
                    </button>
                  </li>
                ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default Dropdown
