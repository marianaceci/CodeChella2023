import styled from "styled-components";

export const Banda = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 1.5rem;
  text-align: center;
  row-gap: 2rem;
  align-items: center;
  justify-content: center;

  ul{
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media screen and (min-width: 768px){
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      column-gap: 2rem;
      padding-right: 4.75rem;
      padding-left: 4.75rem;
    }
  }

  .estilo__banda1 {
    font-weight: 800;
    font-size: 3rem;
    line-height: 3.625rem;
  }
  .estilo__banda2 {
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 3rem;
  }
  .estilo__banda3 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.375rem;    
  }
  .estilo__banda4 {
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.375rem;    
  }
`