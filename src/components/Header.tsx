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
import ProductContext from "../context/productContext/productContext"
import * as actionTypes from "../context/types"
import axios from "axios"
import { REQUEST_URL } from "../context/constants"

const Header: FC = () => {
  const context = useContext(ProductContext)
  const { state, dispatch } = context ? context : null!
  const { selected, available } = state
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const requestLink = (options: string[]) => {
    let link = REQUEST_URL

    options.forEach((type: string) => {
      link += `type=${type}&`
    })

    if (available && options.length > 0) {
      link += "&available=true"
    }

    if (available && options.length === 0) {
      link += "available=true"
    }

    if (link[link.length - 1] === "&") link = link.slice(0, link.length - 1)

    return { link }
  }

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
  }, [dispatch, selected, isChecked])

  const onChange = () => {
    if (isChecked) {
      dispatch({
        type: actionTypes.REMOVE_AVAILABLE,
      })
    } else {
      dispatch({
        type: actionTypes.SET_AVAILABLE,
      })
    }
    setIsChecked(!isChecked)
  }
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
            <Dropdown requestLink={requestLink} />
          </div>
          <div className="available">
            <label className="label-control">
              Disponibile subito
              <input
                type="checkbox"
                name="available"
                onChange={() => onChange()}
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
