import styled from "styled-components";

export const ContainerS1= styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    background-color: #EFF8FF;
`
export const ContainerS1b= styled.div`
    width:80%;
    display:flex;
    justify-content:center;
    @media(max-width:1023px){
        flex-direction:column;
        align-items:center;
    }
    
`
export const ContainerLeft = styled.div`
    width:80%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    @media(max-width:769px){
        width:100%;
        flex-direction:column;
        align-items:center;
        text-align:center;
    }
`
export const ContainerRight = styled.div`
    width:50%;
    display:flex;
    justify-content:center;
    @media(max-width:426px){
        display:none ;
    }
`
export const Titulo = styled.p`
    font-size:3em;
    font-family: 'Sora', sans-serif;
`
export const Img = styled.img`
    width:500px;
    height:500px;
`
export const Botao = styled.button`
    background-color:#0F9AFE;
    padding: 16px 36px 16px 36px;
    border-radius:20px;
    border:none ;
    color:#fff;
    text-transform:capitalize;
    cursor:pointer;
    font-family: 'Inter', sans-serif;
    width:40%;
    @media(max-width:426px){
        width:80%;
    }
`
