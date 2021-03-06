import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./styles/globalStyles"
import { theme } from "./styles/colorThemes"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { ProductState } from "./context/productContext/ProductState"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductState>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </ProductState>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
