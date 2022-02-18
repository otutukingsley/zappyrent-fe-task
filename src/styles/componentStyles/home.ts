import styled from "styled-components"

export const MainShowcase = styled.div`
  display: block;
  width: 100%;
  padding: 0 1rem 2.5rem 1rem;
`
export const ShowPlaces = styled.div`
  display: block;
  margin: 0;
  width: 100%;
`
export const Listings = styled.div`
  font-weight: normal;
  font-size: inherit;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 2.313rem;
  display: block;
  width: 100%;
  text-align: left;
`
export const HomeSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  width: 100%;
  grid-gap: 1.563rem;

  @media (max-width: 405px) {
    grid-template-columns: 1fr;
  }
`
export const PlaceCards = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: stretch;
  font-size: inherit;
  text-align: left;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
`
export const CardImgContainer = styled.div`
  width: 100%;
  display: block;
`
export const CardImg = styled.img`
  width: 100%;
  height: 12.313rem;
  display: block;
  object-fit: cover;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
`
export const PlaceDesc = styled.div`
  padding: 1rem 0.85rem;
  display: block;
  width: 100%;
`
export const Type = styled.p`
  font-weight: normal;
  font-size: inherit;
  display: block;
  width: 100%;
  text-align: left;
  margin-bottom: 1rem;
  text-align: left;
`
export const Details = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  grid-gap: 1.875rem;
  margin-bottom: 1.438rem;

  @media (max-width: 300px) {
    grid-gap: 1rem;
  }
`
export const DescNum = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.25rem;
`
export const Pricing = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.borderGrey};
  display: block;
  width: 100%;
`
export const PricingInner = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Rent = styled.p`
  color: ${({ theme }) => theme.colors.green};
  text-transform: capitalize;
  font-weight: 600;
  font-size: clamp(0.9rem, 2.5vw, 1.25rem);
`
export const RentPrice = styled.p`
  font-size: clamp(0.9rem, 2.5vw, 1.25rem);
`
export const NumPrice = styled.span`
  font-weight: 600;
`
