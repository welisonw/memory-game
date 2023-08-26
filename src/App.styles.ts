
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 60rem;
  margin: auto;
  display: flex;
  padding: 5rem 0;

  @media (max-width: 750px) {
    flex-direction: column;
  };
`;

export const InfosArea = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;

  @media (max-width: 750px) {
    margin-bottom: 3.125rem;
    align-items: center;
  };
`;

export const Logo = styled.a`
  display: block;
`;

export const Data = styled.div`
  width: 100%;
  margin: .6rem 0;

  @media (max-width: 750px) {
    display: flex;
    justify-content: space-around;
    text-align: center;
  };
`;

export const CardsArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 750px) {
    justify-content: center;
    margin: 0 1.3rem;
  };
`;

export const Cards = styled.div`
  width: 40rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;