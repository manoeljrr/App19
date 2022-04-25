import styled from "styled-components";

export const ContainerS5= styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center ;
    flex-direction:column;
    background-image:url("https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
    background-repeat:no-repeat;
    background-size:cover;
    margin-top:3rem;
`
export const ContainerS5b= styled.div`
    width:80%;
    height:100%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    padding:3rem 0 3rem 0;
    @media(max-width:425px){
        width:100%;
    }
`
export const ContainerCenter = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center ;
    padding:2rem;
`
export const Titulo = styled.label`
    font-size:3em;
    font-family: 'Sora', sans-serif;
    text-align:center ;
    font-weight:bold 600;
    text-transform:capitalize ;
    color:#fff;
    @media(max-width:425px){
        font-size:2em;
    }
`
export const Paragrafo = styled.p`
    font-size:1em;
    font-family: 'Sora', sans-serif;
    color:#fff;
    text-align:center;
`
export const ContainerInput = styled.div`
    display:flex;
    justify-content:center;
    width:80%;
    margin-top:3rem;
    @media(max-width:425px){
        width:100%;
    }
`
export const Input = styled.input`
    width:50%;
    border-top:none;
    border-right: none;
    border-left:none ;
    background-color:transparent;
    color:#fff;
    font-size:1em ;
`
export const Botao = styled.button`
    display:flex;
    align-items:center;
    background-color:#0F9AFE;
    border-radius:20px;
    border:none;
    color:#fff;
    text-transform:capitalize;
    cursor:pointer;
    font-family: 'Inter', sans-serif;
    font-weight:500;
    padding:0.8rem 1rem 0.8rem 1rem;
    margin-left:0.5rem;
`

