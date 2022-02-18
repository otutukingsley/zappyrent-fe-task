import React, { FC, useEffect, useContext } from "react"
import axios from "axios"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import { Container } from "../styles/globalStyles"
import Places from "../components/Places"
import { Loader, Center } from "../styles/componentStyles/loader"
import ProductContext from "../context/productContext/productContext"
import * as actionTypes from "../context/types"
import {
  HomeSection,
  Listings,
  MainShowcase,
  ShowPlaces,
} from "../styles/componentStyles/home"
import { Error } from "../styles/componentStyles/error"
import { REQUEST_URL } from "../context/constants"

const Home: FC = () => {
  const context = useContext(ProductContext)
  const { state, dispatch } = context ? context : null!
  const { loading, items, error } = state
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        dispatch({
          type: actionTypes.GET_PLACES_REQUEST,
        })
        const { data } = await axios.get(REQUEST_URL)
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
          ) : !loading && items.length === 0 ? (
            <Error>No Place Found</Error>
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
