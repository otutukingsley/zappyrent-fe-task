import React, { FC } from "react"
import { Container } from "../styles/globalStyles"
import {
  Header as Heading,
  Nav,
  HeaderActions,
  MyLogo,
  MyLogoContainer,
} from "../styles/componentStyles/header"
import Logo from "../assets/images/zappyrent.png"
import Dropdown from "./Dropdown"

const Header: FC = () => {
  const onClick = () => {
    console.log("")
    //link = link in the local storage
    // if avaialbe is true change to false and append to link list
  }
  return (
    <Heading>
      <Container>
        <Nav>
          <MyLogoContainer>
            <MyLogo src={Logo} alt="Zappyrent - Logo" />
          </MyLogoContainer>
        </Nav>
        <HeaderActions>
          <div>
            <Dropdown multiple={true} />
          </div>
          <div>
            <label className="label-control">
              Disponibile subito
              <input type="checkbox" name="available" onClick={onClick} />
            </label>
          </div>
        </HeaderActions>
      </Container>
    </Heading>
  )
}

export default Header
