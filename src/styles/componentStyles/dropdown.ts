import styled from "styled-components"

export const FGselect = styled.div`
  width: 13rem;
  border: 1px solid ${({ theme }) => theme.colors.borderGrey};
  border-radius: 1.25rem;
  color: ${({ theme }) => theme.colors.grey};
  padding: 0.8rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  position: relative;

  @media (max-width: 460px) {
    width: 8rem;
  }
  @media (max-width: 325px) {
    width: 6.5rem;
    padding: 0.5rem;
  }
  @media (max-width: 300px) {
    width: 100%;
  }
`

export const DownArrow = styled.div`
  position: absolute;
  right: 5%;
  top: 55%;
  transform: translateY(-50%);
  transition: all 300ms ease-in-out;
`

export const HouseChoices = styled.ul`
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
  width: 12.5rem;
  top: 0;
  margin-top: 55px;
  border: 1px solid ${({ theme }) => theme.colors.borderGrey};
  border-radius: 1rem;
  padding: 0.8rem;
  display: block;
  background-color: ${({ theme }) => theme.colors.white};
`
export const HouseChoicesItem = styled.li`
  margin-bottom: 1rem;
  display: block;
  width: 100%;
  cursor: pointer;
  &: last-child {
    margin-bottom: 0;
  }
`

export const CustomCheckBox = styled.button`
  border: none;
  display: block;
  width: 100%;
  font-size: inherit;
  color: inherit;
  padding: 0.3rem;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
  grid-gap: 0.5em;
`
export const CheckboxIn = styled.div`
  margin: 0;
  font: inherit;
  width: 1.4rem;
  height: 1.4rem;
  border: 1px solid ${({ theme }) => theme.colors.borderGrey};
  border-radius: 0.35rem;
  padding: 0.2rem;
`
export const CheckboxInner = styled.div`
  height: 100%;
  border-radius: 0.2rem;
`
