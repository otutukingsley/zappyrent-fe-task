import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./styles/globalStyles"
import { theme } from "./styles/colorThemes"
import { Provider } from "react-redux"
import store from "./store/store"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
