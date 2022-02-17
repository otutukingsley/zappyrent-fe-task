import React, { FC, useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

const Modal: FC = () => {
  const navigate = useNavigate()
  const { id } = useParams<"id">()
  const [place, setPlace] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    const fetchPlace = async () => {
      setLoading(true)
      try {
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
      <div className="modal-wrapper">modal</div>
    </div>
  )
}

export default Modal
