import React, { FC, useState, useContext, useEffect, ChangeEvent } from "react"
import { FaAngleDown } from "react-icons/fa"
import PlaceContext from "../context/placeContext"
import * as actionTypes from "../context/types"

interface Props {
  multiple: boolean
}

const Dropdown: FC<Props> = ({ multiple }) => {
  const context = useContext(PlaceContext)
  const { state } = context ? context : null!
  const { loading, items } = state
  const [open, setOpen] = useState<boolean>(false)
  const [selected, setSelected] = useState<any>([])
  const [onSelect, setOnSelect] = useState<any>("")
  const [option, setOption] = useState<boolean>(false)

  const toggle = () => {
    if (loading) {
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

  console.log(selected)

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
            {!loading &&
              items.length > 0 &&
              items
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
                      onClick={() => handleMultipleSelect(itemType)}
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

// <li key={item.id} className="house-choices-item">
//   {/* <button type="button" onClick={() => handleOnclick(item)}>
//   <span>{item.value}</span>
//   <span>{isItemSelected(item) && "Selected"}</span>
// </button> */}
//   {/* <label className="label-control">
//     <input type="checkbox" name="available" value={onSelect} />
//     {item.type}
//   </label> */}

// </li>
