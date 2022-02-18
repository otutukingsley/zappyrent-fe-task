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
select{
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;
}
select::-ms-expand {
  display: none;
}
.rotate-svg {
  transform: rotate(180deg);
}

.place-item{
  display: block;
  width: 100%;
  font-size: clamp(0.85rem, 2.5vw, 0.95rem);
}

.background{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.modal-wrapper {
  width: 40rem;
  height: 40.5rem;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: ${({ theme }) => theme.colors.black};
  position: relative;
  z-index: 1000;
  border-radius: 1rem;
  padding: 1.313rem 0;
  text-align: center;
}
.close{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1.75rem;
}
.close-icon{
  cursor: pointer;
}
.modal-content{
  display: block;
  width: 100%;
  margin: 0;
  color: inherit;
  padding: 0 1rem;
}
.modal-img-container{
  height: 9.75rem;
  width: 100%;
  display: block;
  margin-top: 1.875rem;
  margin-bottom: 1.563rem;
}
.modal-img{
  height: 9.75rem;
  width: 100%;
  display: block;
  object-fit: cover;
}
.modal-desc{
  margin-bottom:1.563rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  grid-gap: 1.5rem;
}
.modal-address{
  margin-bottom: 1.375rem;
  font-weight: 600;
}
.modal-text{
  font-weight: 400;
  font-size: 0.95rem;
  margin-bottom: 1.75rem;
}
.modal-pricing{
  padding: 1.438rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.borderGrey};
}
.btn{
  padding: 1rem 5.375rem;
  border: none;
  outline: none;
  border-radius: 2rem;
  font-size: 1.35rem;
  font-weight: 600;
  cursor: pointer;
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
  text-align: left;
  display: block;
  width: 100%;
  margin-bottom: 1.438rem;
`
