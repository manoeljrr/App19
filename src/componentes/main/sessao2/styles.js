import styled from "styled-components";

export const ContainerS2= styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const ContainerS2b= styled.div`
    width:80%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    padding:2rem 0 2rem 0;
`
export const Titulo = styled.p`
    font-size:2.5em;
    font-family: 'Sora', sans-serif;
    text-align:center ;
    text-transform:capitalize ;
`
export const SubTitulo = styled.p`
    font-size:1em;
    font-family: 'Sora', sans-serif;
`
export const Paragrafo = styled.p`
    font-size:1em;
    font-family: 'Sora', sans-serif;
    text-align:center;
`
export const Cart = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center ;
`
export const ContainerCenter = styled.div`
    display:flex;
    justify-content:space-between;
    @media(max-width:426px){
        flex-direction:column ;
    }
`
export const Icone = styled.i`
    font-size:3em;
    color:#0F9AFE;
`