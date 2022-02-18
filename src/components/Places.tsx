import React, { FC } from "react"
import { Link } from "react-router-dom"
import {
  CardImg,
  CardImgContainer,
  DescNum,
  Details,
  NumPrice,
  PlaceCards,
  PlaceDesc,
  Pricing,
  PricingInner,
  Rent,
  RentPrice,
  Type,
} from "../styles/componentStyles/home"
import { Heading } from "../styles/globalStyles"

interface PlaceProps {
  item: any
}

const Places: FC<PlaceProps> = ({ item }) => {
  return (
    <>
      <Link to={`/img/${item.id}`} className="place-item">
        <PlaceCards>
          <CardImgContainer>
            <CardImg src={item.images[0].url} alt={item.name} />
          </CardImgContainer>
          <PlaceDesc>
            <Type>{item.type}</Type>
            <Heading className="h-margin">{item.title}</Heading>
            <Details>
              <li>
                <DescNum className="desc-num">{item.tenants}</DescNum> inquilini
              </li>
              <li>
                <DescNum className="desc-num">{item.baths}</DescNum> bagno
              </li>
              <li>
                <DescNum className="desc-num">{item.beds}</DescNum> letto
              </li>
            </Details>
            <Type>{item.description.substring(0, 90)}...</Type>
          </PlaceDesc>
          <Pricing>
            <PricingInner>
              <Rent>canone d'affitto</Rent>
              <RentPrice>
                <NumPrice>&euro; {item.price}</NumPrice> /mese
              </RentPrice>
            </PricingInner>
          </Pricing>
        </PlaceCards>
      </Link>
    </>
  )
}

export default Places
