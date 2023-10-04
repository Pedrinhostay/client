import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;

   label{
        color: var(--bg-primary);
        font-size: 2rem;
   }
   input{
        height: 38px;
        border: none;
        outline: none;
        border-bottom: 1px solid #090909;
   }
`