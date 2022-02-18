import React, { FC, useEffect, useContext, useRef, useCallback } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { FaTimes } from "react-icons/fa"
import axios from "axios"
import { Loader, Center } from "../styles/componentStyles/loader"
import PlaceContext from "../context/placeContext"
import * as actionTypes from "../context/types"
import {
  Button,
  ModalBackground,
  ModalCloseWrapper,
  ModalContent,
  ModalDesc,
  ModalFlex,
  ModalImg,
  ModalImgContainer,
  ModalPricing,
  ModalText,
  ModalWrapper,
} from "../styles/componentStyles/modal"
import { Heading, HeadingSm } from "../styles/globalStyles"
import {
  DescNum,
  NumPrice,
  Rent,
  RentPrice,
} from "../styles/componentStyles/home"

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
    <ModalBackground onClick={handleDismiss} ref={modalRef}>
      <ModalWrapper>
        {single ? (
          <Center>
            <Loader />
          </Center>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          <>
            <ModalContent>
              <ModalCloseWrapper>
                <FaTimes className="close-icon" onClick={() => navigate(-1)} />
              </ModalCloseWrapper>
              <Heading className="text-center">{item.title}</Heading>
              <ModalImgContainer>
                <ModalImg src={item.images[0].url} alt={item.name} />
              </ModalImgContainer>
              <ModalDesc>
                <li>
                  <DescNum>{item.tenants}</DescNum> inquilini
                </li>
                <li>
                  <DescNum>{item.baths}</DescNum> bagno
                </li>
                <li>
                  <DescNum>{item.beds}</DescNum> letto
                </li>
              </ModalDesc>
              <HeadingSm className="text-center margin-text">
                {item.street} {item.street_number}, {item.cap} {item.city}
              </HeadingSm>
              <ModalText>{item.description}</ModalText>
            </ModalContent>
            <ModalPricing>
              <ModalFlex>
                <Rent>canone d'affitto</Rent>{" "}
                <RentPrice>
                  <NumPrice>&euro; {item.price} </NumPrice>
                  /mese
                </RentPrice>
              </ModalFlex>
              <Button type="button" className="btn-green">
                Prenota allogio
              </Button>
            </ModalPricing>
          </>
        )}
      </ModalWrapper>
    </ModalBackground>
  )
}

export default Modal
