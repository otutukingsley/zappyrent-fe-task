import React, { FC } from "react"

interface PlaceProps {
  item: any
}

const Places: FC<PlaceProps> = ({ item }) => {
  const onClick = (item: any) => {
    console.log(item)
  }
  return (
    <div className="place-item" onClick={() => onClick(item)}>
      <div className="place-card">
        <div className="img-card-container">
          <img src={item.images[0].url} alt={item.name} className="place-img" />
        </div>
        <div className="place-desc">
          <h4 className="place-type">{item.type}</h4>
          <h4 className="place-title">{item.title}</h4>
          <ul className="details-desc">
            <li className="details-desc-item">
              <span className="desc-num">{item.tenants}</span> inquilini
            </li>
            <li className="details-desc-item">
              <span className="desc-num">{item.baths}</span> bagno
            </li>
            <li className="details-desc-item">
              <span className="desc-num">{item.beds}</span> letto
            </li>
          </ul>
          <p className="actual-desc">{item.description.substring(0, 90)}...</p>
        </div>
        <div className="pricing-line">
          <div className="pricing">
            <p className="rent">canone d'affitto</p>
            <p className="rent-price">
              <span className="desc-num num-price">&euro; {item.price}</span>{" "}
              /mese
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Places
