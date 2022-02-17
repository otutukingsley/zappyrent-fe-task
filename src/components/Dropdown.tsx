import React, { FC, useState } from "react"
import { FaAngleDown } from "react-icons/fa"

interface DropdownProps {
  items: any
  multiple: boolean
}

const Dropdown: FC<DropdownProps> = ({ items, multiple = false }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [selected, setSelected] = useState<any>([])
  const [onSelect, setOnSelect] = useState<any>("")
  const toggle = () => setOpen(!open)

  const handleOnclick = (item: any) => {
    if (!selected.some((current: any) => current.id === item.id)) {
      if (!multiple) {
        setSelected([item])
      } else if (multiple) {
        setSelected([...selected, item])
      }
    } else {
      let selectionAfterRemove: any = selected
      selectionAfterRemove = selectionAfterRemove.filter(
        (current: any) => current.id !== item.id
      )
      setSelected([...selectionAfterRemove])
    }
  }

  const isItemSelected = (item: any) => {
    if (selected.find((current: any) => current.id === item.id)) {
      return true
    } else {
      return false
    }
  }

  const onChange = (item: any) => {
    console.log("changed")
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
            {items.map((item: any) => (
              <li key={item.id} className="house-choices-item">
                {/* <button type="button" onClick={() => handleOnclick(item)}>
                  <span>{item.value}</span>
                  <span>{isItemSelected(item) && "Selected"}</span>
                </button> */}
                <label className="label-control">
                  <input
                    type="checkbox"
                    name="available"
                    value={onSelect}
                    onChange={onChange}
                  />
                  Private Room
                </label>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default Dropdown
