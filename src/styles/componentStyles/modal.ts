import styled from "styled-components"

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media (max-width: 405px) {
    align-items: flex-start;
  }
`
export const ModalWrapper = styled.div`
  width: 40rem;
  height: 40.5rem;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: ${({ theme }) => theme.colors.black};
  position: relative;
  z-index: 1000;
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 405px) {
    width: 100%;
    padding: 0.5rem;
  }
`
export const ModalContent = styled.div`
  display: block;
  width: 100%;
  margin: 0;
  color: ${({ theme }) => theme.colors.grey};
  padding: 0;
`
export const ModalCloseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1.75rem;

  @media (max-width: 405px) {
    margin-bottom: 1rem;
  }
`
export const ModalImgContainer = styled.div`
  height: 9.75rem;
  width: 100%;
  display: block;
  margin-top: 1.875rem;
  margin-bottom: 1.563rem;

  @media (max-width: 405px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`
export const ModalImg = styled.img`
  height: 9.75rem;
  width: 100%;
  display: block;
  object-fit: cover;
`
export const ModalDesc = styled.ul`
  margin-bottom: 1.563rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  grid-gap: 1.5rem;

  @media (max-width: 405px) {
    margin-bottom: 1rem;
  }
`
export const ModalText = styled.p`
  font-weight: 400;
  font-size: clamp(0.85rem, 2.5vw, 0.95rem);
  margin-bottom: 1.75rem;

  @media (max-width: 405px) {
    margin-bottom: 1rem;
  }
`
export const ModalPricing = styled.div`
  padding: 1.438rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.borderGrey};
  display: block;
  width: 100%;

  @media (max-width: 405px) {
    padding: 1rem 0;
  }
`

export const ModalFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-gap: 1rem;
  margin-bottom: 1.438rem;

  @media (max-width: 405px) {
    margin-bottom: 1rem;
  }
`
export const Button = styled.button`
  padding: 1rem 5.375rem;
  border: none;
  outline: none;
  border-radius: 2rem;
  font-size: clamp(1rem, 2.5vw, 1.35rem);
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 405px) {
    padding: 1rem 3.375rem;
  }
`
