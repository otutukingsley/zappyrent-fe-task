import React, { FC } from "react"
import { Container } from "../styles/globalStyles"
import {
  Header as Heading,
  Nav,
  HeaderActions,
} from "../styles/headerStyles/header"
import Logo from "../assets/images/zappyrent.png"
import Dropdown from "./Dropdown"

const items = [
  {
    id: 1,
    value: "Hello",
  },
  {
    id: 2,
    value: "Hello2",
  },
  {
    id: 3,
    value: "Hello3",
  },
]

const Header: FC = () => {
  return (
    <Heading>
      <Container>
        <Nav>
          <div className="img-container">
            <img src={Logo} alt="Zappyrent - Logo" className="logo" />
          </div>
        </Nav>
        <HeaderActions>
          <div className="form-group">
            <Dropdown items={items} multiple={true} />
          </div>
          <div className="form-group">
            <label className="label-control">
              Disponibile subito
              <input type="checkbox" name="available" />
            </label>
          </div>
        </HeaderActions>
      </Container>
    </Heading>
  )
}

export default Header
