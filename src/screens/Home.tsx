import React, { FC, useEffect, useContext } from "react"
import axios from "axios"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import { Container } from "../styles/globalStyles"
import Places from "../components/Places"
import { Loader, Center } from "../styles/componentStyles/loader"
import PlaceContext from "../context/placeContext"
import * as actionTypes from "../context/types"

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
    <div className="home">
      <Outlet />
      <Header />
      <main className="main-showcase">
        <Container>
          {loading ? (
            <Center>
              <Loader />
            </Center>
          ) : error ? (
            <h1>{error}</h1>
          ) : (
            <div className="show-places">
              <h3 className="places-heading">{items.length} allogi trovati</h3>
              <div className="place-section">
                {items.map((place: any) => (
                  <Places item={place} key={place.id} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </main>
    </div>
  )
}

export default Home
