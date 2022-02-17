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
  font-size: 1.15rem;
}
ul{
  list-style: none;
  display: block;
}
a{
  text-decoration: none;
}

input[type="checkbox"] {
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  width: 1.40rem;
  height: 1.40rem;
  border: 1px solid ${({ theme }) => theme.colors.grey};
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
.form-group-select {
  width: 100%;
  min-width: 15ch;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 1.25rem;
  color: ${({ theme }) => theme.colors.grey};
  padding: 0.8rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  position: relative;
}
.rotate-svg {
  transform: rotate(180deg);
}
.dropdown-arrow{
  position: absolute;
  right: 5%;
  top: 55%;
  transform: translateY(-50%);
  transition: all 300ms ease-in-out;
}
.arrow-down{
 transition: all 300ms ease-in-out;
 width: 100%;
 height: 100%;
}
.house-choices{
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
  width: 12.5rem;
  top: 0;
  margin-top: 55px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 1rem;
  padding: 0.8rem;
  display: block;
  background-color: ${({ theme }) => theme.colors.white};
}
.house-choices-item{
  margin-bottom: 1rem;
  display: block;
  width: 100%;
  cursor: pointer;
}
.house-choices-item:last-child{
  margin-bottom: 0;
}
.main-showcase{
  display: block;
  width: 100%;
  padding: 0 1rem 1rem 1rem;
}
.places-heading{
  font-weight: normal;
  font-size: inherit;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 2.313rem;
  display: block;
  width: 100%;
  text-align: left;
}
.place-section{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  grid-gap: 1.563rem;
}
.place-item{
  display: block;
  width: 100%;
  font-size: 0.94rem;
}
.place-card{
  width: 100%;
  height: 100%;
  display: block;
  font-size: 0.94rem;
  text-align: left;
  box-shadow: 0px 1px 5px 1px rgba(0,0,0,0.1);
  -webkit-box-shadow: 0px 1px 5px 1px rgba(0,0,0,0.1);
  -moz-box-shadow: 0px 1px 5px 1px rgba(0,0,0,0.1);
  border-radius: 2rem;
}
.img-card-container{
  width: 100%;
  display: block;
}
.place-img{
  width: 100%;
  height: 12.313rem;
  display: block;
  object-fit: cover;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
}
.place-desc{
  padding: 1rem;
  display: block;
  width: 100%;
}
.place-type{
  font-weight: normal;
  font-size: inherit;
  display: block;
  width: 100%;
  text-align: left;
  margin-bottom: 1rem;
  text-align: left;
}
.place-title{
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.30rem;
  text-align: left;
  display: block;
  width: 100%;
  margin-bottom: 1.438rem;
}
.details-desc{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
  grid-gap: 1.875rem;
  margin-bottom: 1.438rem;
}
.desc-num{
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.25rem;
}
.pricing-line{
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
  display: block;
  width: 100%;
}
.pricing{
  padding: 1rem;
  display: flex;
  flexx-direction: row;
  justify-content: space-between;
  align-items: center;
}
.rent{
  color: ${({ theme }) => theme.colors.green};
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.25rem;
}
.rent-price{
  font-size: 1.25rem;
}
.num-price{
  font-weight: 600;
}
`
export const Container = styled.div`
  display: block;
  max-width: 81.25rem;
  margin: 0 auto;
  padding: 0;
`
