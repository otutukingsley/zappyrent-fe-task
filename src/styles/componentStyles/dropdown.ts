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
