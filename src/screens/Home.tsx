import React, { FC, useEffect, useContext } from "react"
import axios from "axios"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import { Container } from "../styles/globalStyles"
import Places from "../components/Places"
import { Loader, Center } from "../styles/componentStyles/loader"
import PlaceContext from "../context/placeContext"
import * as actionTypes from "../context/types"
import {
  HomeSection,
  Listings,
  MainShowcase,
  ShowPlaces,
} from "../styles/componentStyles/home"
import { Error } from "../styles/componentStyles/error"

const Home: FC = () => {
  const context = useContext(PlaceContext)
  const { state, dispatch } = context ? context : null!
  const { loading, items, error } = state
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        dispatch({
          type: actionTypes.GET_PLACES_REQUEST,
        })
        const { data } = await axios.get(
          "https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties"
        )
        dispatch({
          type: actionTypes.GET_PLACES_SUCCESS,
          payload: data,
        })
      } catch (err: any) {
        dispatch({
          type: actionTypes.GET_PLACES_ERROR,
          payload:
            err.response && err.response.data.message
              ? err.response.data.message
              : err.message,
        })
      }
    }
    fetchPlaces()
  }, [dispatch])
  return (
    <>
      <Outlet />
      <Header />
      <MainShowcase>
        <Container>
          {loading ? (
            <Center>
              <Loader />
            </Center>
          ) : error ? (
            <Error>{error}</Error>
          ) : (
            <ShowPlaces>
              <Listings>{items.length} allogi trovati</Listings>
              <HomeSection>
                {items.map((place: any) => (
                  <Places item={place} key={place.id} />
                ))}
              </HomeSection>
            </ShowPlaces>
          )}
        </Container>
      </MainShowcase>
    </>
  )
}

export default Home
