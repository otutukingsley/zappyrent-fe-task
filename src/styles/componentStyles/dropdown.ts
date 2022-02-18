import styled from "styled-components"

export const FGselect = styled.div`
  width: 100%;
  min-width: 15ch;
  border: 1px solid ${({ theme }) => theme.colors.borderGrey};
  border-radius: 1.25rem;
  color: ${({ theme }) => theme.colors.grey};
  padding: 0.8rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  position: relative;
`

// let link: any = localStorage.getItem("link")
//   ? localStorage.getItem("link")
//   : `https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties`

// if (localStorage.getItem("link")) {
//   if (selected.length > 0) {
//     link =
//       link[link.length - 1] === "&"
//         ? link.slice(0, link.length - 1)
//         : link
//     link += "?"
//     selected
//       .filter((current: string) => current !== "available")
//       .forEach((current: string) => {
//         link += `type=${current}&`
//       })
//   }
//   link =
//     link[link.length - 1] === "&" ? link.slice(0, link.length - 1) : link
//   localStorage.setItem("link", link)
// } else {
//   if (selected.length > 0) link += "?"
//   selected
//     .filter((current: string) => current !== "available")
//     .forEach((current: string) => {
//       link += `type=${current}&`
//     })
//   link =
//     link[link.length - 1] === "&" ? link.slice(0, link.length - 1) : link
//   localStorage.setItem("link", link)
// }
