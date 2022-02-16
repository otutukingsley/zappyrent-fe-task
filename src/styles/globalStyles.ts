import { createGlobalStyle } from "styled-components"
import { ThemeType } from "./colorThemes"

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
  color: ${({ theme }) => theme.colors.red};
  background-color: #ffffff;
}
ul{
  list-style: none;
  display: block;
}
a{
  text-decoration: none;
}
label{
  display: block;
}
`
