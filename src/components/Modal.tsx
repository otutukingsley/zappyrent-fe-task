import React, { FC, useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { FaTimes } from "react-icons/fa"
import axios from "axios"

const Modal: FC = () => {
  const navigate = useNavigate()
  const { id } = useParams<"id">()
  const [place, setPlace] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(
          `https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties/${id}`
        )
        setPlace(data)
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
    if (id) {
      fetchPlace()
    }
  }, [id])

  const handleDismiss = () => {
    console.log("dismissed")
    navigate(-1)
  }

  return (
    <div className="background" onClick={handleDismiss}>
      <div className="modal-wrapper">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          <>
            <div className="modal-content">
              <div className="close">
                <FaTimes className="close-icon" />
              </div>
              <h3 className="modal-title">{place.title}</h3>
              <div className="modal-img-container">
                <img
                  src={place.images[0].url}
                  alt={place.name}
                  className="modal-img"
                />
              </div>
              <ul className="modal-desc">
                <li className="modal-desc-item">
                  <span className="desc-num">{place.tenants}</span> inquilini
                </li>
                <li className="modal-desc-item">
                  <span className="desc-num">{place.baths}</span> bagno
                </li>
                <li className="modal-desc-item">
                  <span className="desc-num">{place.beds}</span> letto
                </li>
              </ul>
              <p className="modal-address">
                {place.street} {place.street_number}, {place.cap} {place.city}
              </p>
              <p className="modal-text">{place.description}</p>
            </div>
            <div className="modal-pricing">
              <span className="rent">canone d'affitto</span>{" "}
              <span className="rent-price">&euro; {place.price} /mese</span>
            </div>
            <button type="button" className="btn btn-block btn-green">
              Prenota allogio
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Modal
