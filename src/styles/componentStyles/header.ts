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
  padding: 0 2.5rem 1.563rem 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-bottom: 3.438rem;
  grid-gap: 2.313rem;
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
