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

  // useEffect(() => {
  //   const filterPlace = async () => {
  //     let link: any = `https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties`

  //     if (!localStorage.getItem("link")) {
  //       if (selected.length > 0) {
  //         link += "?"
  //         selected.forEach((i: any) => {
  //           link += `${i}=true&`
  //         })
  //         if (link[link.length - 1] === "&") {
  //           link = link.slice(0, link.length - 1)
  //         }
  //       }
  //     } else {
  //       link = localStorage.getItem("link")
  //       if (link[link.length - 1] !== "&") {
  //         link += "&"
  //         link += "available=true"
  //       }
  //       console.log(link)
  //     }
  //     if (link[link.length - 1] === "&") link = link.slice(0, link.length - 1)
  //     //store the link in local storage
  //     localStorage.setItem("link", link)
  //     //check if available in local localStorage//
  //     //if available append the link and request it
  //     try {
  //       dispatch({
  //         type: actionTypes.SEARCH_LOGS_REQUEST,
  //       })
  //       const { data } = await axios.get(link)
  //       dispatch({
  //         type: actionTypes.SEARCH_LOGS_SUCCESS,
  //         payload: data,
  //       })
  //     } catch (err: any) {
  //       dispatch({
  //         type: actionTypes.SEARCH_LOGS_ERROR,
  //         payload:
  //           err.response && err.response.data.message
  //             ? err.response.data.message
  //             : err.message,
  //       })
  //     }
  //   }
  //   filterPlace()
  // }, [dispatch, selected])

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!selected.some((current: any) => current === event.target.name)) {
      dispatch({
        type: actionTypes.ADD_SELECTED,
        payload: event.target.name,
      })
    } else {
      dispatch({
        type: actionTypes.REMOVE_SELECTED,
        payload: event.target.name,
      })
    }
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
          <div>
            <label className="label-control">
              Disponibile subito
              <input
                type="checkbox"
                name="available"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  onChange(event)
                }
              />
            </label>
          </div>
        </HeaderActions>
      </Container>
    </Heading>
  )
}

export default Header
