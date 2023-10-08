import styled from "styled-components";

export const Container = styled.section`
  padding: 2rem 8rem;
`
export const Content = styled.div`
  h1{
    font-size: 3rem;
    color: var(--bg-primary);
    margin: 1rem 0rem;
  }
`

export const AreaFormReservation = styled.form`
      display: flex;
      width: 100%;
      justify-content:space-between;
      align-items: center;
      background-color: var(--bg-primary);
      padding: 2rem;

  input{
    width:26%;
    height: 38px;
    padding: 6px;
    border: none;
    outline: none;
  }
  button{
    width: 16%;
    height: 38px;
    border: none;
    color: var(--bg-second);
    background-color: #707070;
  }
`