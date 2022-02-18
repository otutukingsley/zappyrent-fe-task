import { createGlobalStyle } from "styled-components"
import { ThemeType } from "./colorThemes"
import styled from "styled-components"

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
*{
  margin: 0;
  padding: 0;
  outline:0;
  box-sizing:border-box;
  font-family: "Inter", sans-serif; 
 }
 body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${({ theme }) => theme.colors.grey};
  font-size: clamp(0.9rem, 2.5vw, 1.15rem);
  position: relative;
}
ul{
  list-style: none;
  display: block;
}
a{
  text-decoration: none;
  color: inherit;
}
.home{
  position: relative;
}

.available{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

input[type="checkbox"] {
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  width: 1.40rem;
  height: 1.40rem;
  border: 1px solid ${({ theme }) => theme.colors.borderGrey};
  border-radius: 0.35rem;
  transform: translateY(-0.075rem);
  display: grid;
  place-content: center;
}
input[type="checkbox"]::before {
  content: "";
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.1rem;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1rem 1rem ${({ theme }) => theme.colors.green};
}
input[type="checkbox"]:checked::before {
  transform: scale(1);
}
.label-control {
  font-size: inherit;
  display: flex;
  align-items: center;
  justify-content: stretch;
  grid-gap: 0.5rem;
  cursor: pointer;
}

.rotate-svg {
  transform: rotate(180deg);
}

.place-item{
  display: block;
  width: 100%;
  font-size: clamp(0.85rem, 2.5vw, 0.95rem);
}
.close-icon{
  cursor: pointer;
}

.text-center{
  text-align: center;
}

.btn-green{
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.green};
}

.is-checked{
  background-color: ${({ theme }) => theme.colors.green};
}
.not-checked{
  background-color: ${({ theme }) => theme.colors.white};
}

.h-margin{
  margin-bottom: 1.438rem;
}
.margin-text{
   margin-bottom: 1.438rem;
   @media (max-width: 405px){
     margin-bottom: 1rem;
   }
}
`
export const Container = styled.div`
  display: block;
  max-width: 81.25rem;
  margin: 0 auto;
  padding: 0;
`
export const Heading = styled.h4`
  color: ${({ theme }) => theme.colors.black};
  font-size: clamp(1.15rem, 2.5vw, 1.2rem);
  display: block;
  width: 100%;
`
export const HeadingSm = styled.h5`
  color: ${({ theme }) => theme.colors.black};
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  display: block;
  width: 100%;
`
