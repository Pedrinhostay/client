import styled from "styled-components";

export const Container = styled.section`
 width: 100%;
 height: 100vh;
 background-color: var(--bg-second);
`
export const Header = styled.header`
  background-color: var(--bg-primary);
  padding: 2rem 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 3rem;
  color: #fefefe;
`
export const Navigation = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  padding: 3rem 8rem;
  gap: 50px;
  box-shadow: 5px 4px 4px 0px rgba(95, 123, 123, 0.25);

  button{
    font-size: 1.5rem;
    border: none;
    background-color: var(--bg-primary);
    color: var(--bg-second);
    font-weight: 500;
    padding: 8px 30px;
  }
`
export const Content = styled.div`
  padding: 2rem 8rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(320px,1fr));


 `

 export const ContentItem = styled.div`
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 15px;
    background: #FFF;
    gap: 4rem;
    box-shadow: 4px 4px 4px 5px rgba(0, 0, 0, 0.25);
    color: #707070;

    h1{
        font-size: 3rem;
        color: var(--bg-primary);
    }
    > div{
        display: flex;
        gap: 1rem;
    }
    button{
        border: none;
        padding: 1rem 3.5rem;
        background-color: var(--bg-primary);
        color: var(--bg-second);
    }
 `