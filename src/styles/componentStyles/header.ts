import styled from "styled-components"

export const Header = styled.header`
  display: block;
  width: 100%;
  margin: 0;
  padding: 0 1rem;
  box-shadow: 0px 6px 5px -2px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 6px 5px -2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 6px 5px -2px rgba(0, 0, 0, 0.1);
`

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 3.125rem 0;

  @media (max-width: 768px) {
    padding: 1.25rem 0 1.875rem 0;
  }

  .img-container {
    margin: 0;
    width: 6.563rem;
    padding: 0;
  }
  .logo {
    width: 100%;
    margin: 0;
  }
`
export const HeaderActions = styled.div`
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-bottom: 1.563rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-bottom: 3.438rem;
  grid-gap: 2.313rem;

  @media (max-width: 550px) {
    padding-left: 0;
    padding-right: 0;
    justify-content: center;
    grid-gap: 1.313rem;
  }
  @media (max-width: 375px) {
    grid-gap: 1rem;
  }
  @media (max-width: 300px) {
    flex-direction: column-reverse;
    align-items: stretch;
  }
`
export const MyLogo = styled.img`
  width: 100%;
  margin: 0;
`
export const MyLogoContainer = styled.div`
  margin: 0;
  width: 6.563rem;
  padding: 0;
`
