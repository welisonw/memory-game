
import styled from "styled-components";

export const Container = styled.button`
  width: 12.5rem;
  height: 3.125rem;
  display: flex;
  background-color: #1550FF;
  border: none;
  border-radius: 0.625rem;
  box-shadow: 0px 9px 20px -5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  opacity: 1;
  transition: all ease .3s;

  &:hover {
    opacity: .9;
  }
`;

export const IconArea = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #ffffff33;
  padding: 0 .75rem;
`;

export const Icon = styled.img`
  height: 1.25rem;
`;

export const Title = styled.div`
  height: inherit;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
`;
