import React, { FC, useContext, useEffect, useState } from "react"
import { Container } from "../styles/globalStyles"
import {
  Header as Heading,
  Nav,
  HeaderActions,
  MyLogo,
  MyLogoContainer,
} from "../styles/componentStyles/header"
import Logo from "../assets/images/zappyrent.png"
import Dropdown from "./Dropdown"
import PlaceContext from "../context/placeContext"
import * as actionTypes from "../context/types"
import axios from "axios"

const Header: FC = () => {
  const context = useContext(PlaceContext)
  const { state, dispatch } = context ? context : null!
  const { selected, error } = state
  const [isChecked, setIsChecked] = useState<boolean>(false)

  useEffect(() => {
    const filterPlace = async () => {
      let link = `https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties?`

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
  }, [dispatch, selected, isChecked])

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isChecked) {
      localStorage.setItem("available", "false")
    } else {
      localStorage.setItem("available", "true")
    }
    setIsChecked(!isChecked)
  }
  console.log(selected)
  return (
    <Heading>
      <Container>
        <Nav>
          <MyLogoContainer>
            <MyLogo src={Logo} alt="Zappyrent - Logo" />
          </MyLogoContainer>
        </Nav>
        <HeaderActions>
          <div>
            <Dropdown />
          </div>
          <div className="available">
            <label className="label-control">
              Disponibile subito
              <input
                type="checkbox"
                name="available"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  onChange(event)
                }
                checked={isChecked}
              />
            </label>
          </div>
        </HeaderActions>
      </Container>
    </Heading>
  )
}

export default Header
