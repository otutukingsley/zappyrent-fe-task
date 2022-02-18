import React, { FC, useEffect, useContext, useRef, useCallback } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { FaTimes } from "react-icons/fa"
import axios from "axios"
import { Loader, Center } from "../styles/componentStyles/loader"
import PlaceContext from "../context/placeContext"
import * as actionTypes from "../context/types"

const Modal: FC = () => {
  const navigate = useNavigate()
  const { id } = useParams<"id">()
  const context = useContext(PlaceContext)
  const { state, dispatch } = context ? context : null!
  const { single, item, error } = state
  const modalRef = useRef<any>(null)

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        dispatch({
          type: actionTypes.GET_A_PLACE_REQUEST,
        })
        const { data } = await axios.get(
          `https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties/${id}`
        )
        dispatch({
          type: actionTypes.GET_A_PLACE_SUCCESS,
          payload: data,
        })
      } catch (err: any) {
        dispatch({
          type: actionTypes.GET_A_PLACE_ERROR,
          payload:
            err.response && err.response.data.message
              ? err.response.data.message
              : err.message,
        })
      }
    }
    if (id) {
      fetchPlace()
    }
  }, [dispatch, id])

  const handleDismiss = (e: any) => {
    if (modalRef.current === e.target) {
      navigate(-1)
    }
  }

  return (
    <div className="background" onClick={handleDismiss} ref={modalRef}>
      <div className="modal-wrapper">
        {single ? (
          <Center>
            <Loader />
          </Center>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          <>
            <div className="modal-content">
              <div className="close">
                <FaTimes className="close-icon" onClick={() => navigate(-1)} />
              </div>
              <h3 className="modal-title">{item.title}</h3>
              <div className="modal-img-container">
                <img
                  src={item.images[0].url}
                  alt={item.name}
                  className="modal-img"
                />
              </div>
              <ul className="modal-desc">
                <li className="modal-desc-item">
                  <span className="desc-num">{item.tenants}</span> inquilini
                </li>
                <li className="modal-desc-item">
                  <span className="desc-num">{item.baths}</span> bagno
                </li>
                <li className="modal-desc-item">
                  <span className="desc-num">{item.beds}</span> letto
                </li>
              </ul>
              <p className="modal-address">
                {item.street} {item.street_number}, {item.cap} {item.city}
              </p>
              <p className="modal-text">{item.description}</p>
            </div>
            <div className="modal-pricing">
              <span className="rent">canone d'affitto</span>{" "}
              <span className="rent-price">&euro; {item.price} /mese</span>
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
