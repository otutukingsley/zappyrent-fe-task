import React, { FC, useState, useEffect } from "react"
import axios from "axios"
import Header from "../components/Header"
import { Container } from "../styles/globalStyles"
import Places from "../components/Places"

const Home: FC = () => {
  const [places, setPlaces] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    const fetchPlaces = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get(
          " https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties"
        )
        setPlaces(data)
        setLoading(false)
      } catch (err: any) {
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
    <div>
      <Header />
      <main className="main-showcase">
        <Container>
          <div className="show-places">
            <h3 className="places-heading">{places.length} allogi trovati</h3>
            <div className="place-section">
              {places.map((place: any) => (
                <Places item={place} key={place.id} />
              ))}
            </div>
          </div>
        </Container>
      </main>
    </div>
  )
}

export default Home
