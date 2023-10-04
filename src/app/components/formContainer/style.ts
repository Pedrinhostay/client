import styled from "styled-components";

export const Container =styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--bg-primary);
`
export const SectionForm = styled.div`
  display: flex;
  width: 650px;
  padding: 45px;
  flex-direction: column;
  background-color: var(--bg-second);

    h1{
    font-size: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    text-transform: uppercase;
    color: var(--bg-primary);
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 4rem;
        margin-top: 3rem;
        width: 100%;
    }

    span{
        text-align: center;
        font-size: 1.6rem;
    }
`
