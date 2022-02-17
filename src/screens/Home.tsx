import React, { FC, useState, useEffect } from "react"
import axios from "axios"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import { Container } from "../styles/globalStyles"
import Places from "../components/Places"

const Home: FC = () => {
  const [places, setPlaces] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(
          " https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties"
        )
        setPlaces(data)
        setLoading(false)
      } catch (err: any) {
        setLoading(false)
        if (err.response && err.response.data.message) {
          setError(err.response.data.message)
        } else {
          setError(err.message)
        }
      }
    }
    fetchPlaces()
  }, [])
  return (
    <div className="home">
      <Outlet />
      <Header />
      <main className="main-showcase">
        <Container>
          {loading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1>{error}</h1>
          ) : (
            <div className="show-places">
              <h3 className="places-heading">{places.length} allogi trovati</h3>
              <div className="place-section">
                {places.map((place: any) => (
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
