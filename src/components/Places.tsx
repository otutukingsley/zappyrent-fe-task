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
  Tag,
  Type,
} from "../styles/componentStyles/home"
import { Heading } from "../styles/globalStyles"

type ImageType = {
  url: string
}[]

type ItemProps = {
  available: boolean
  baths: number
  beds: number
  cap: string
  city: string
  country: string
  currency: string
  description: string
  floor: number
  id: number
  images: ImageType
  price: number
  province: string
  street: string
  street_number: number
  tenants: number
  title: string
  type: string
}

interface PlaceProps {
  item: ItemProps
}

const Places: FC<PlaceProps> = ({ item }) => {
  return (
    <>
      <Link to={`/img/${item.id}`} className="place-item">
        <PlaceCards>
          {item.available && <Tag>Disponibile subito</Tag>}
          <CardImgContainer>
            <CardImg src={item.images[0].url} alt={item.title} />
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
