import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 60rem;
  margin: 5rem auto 0 auto;
  display: flex;
  flex-direction: column;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NoListItems = styled.div`
  width: max-content;
  margin: 0 auto;
  text-align: center;

  img {
    margin: 6rem 0 4rem 0;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: rgba(12, 14, 22, 1);
  }

  p {
    color: rgba(136, 142, 176, 1);
    font-size: 1rem;
    line-height: 18px;
  }
`;
