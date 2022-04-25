import styled from "styled-components";

export const ContainerS4= styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    margin-top:2rem;
`
export const ContainerS4b= styled.div`
    width:80%;
    display:flex;
    justify-content:center;
    flex-direction:column;
`
export const Titulo = styled.label`
    font-size:2.5em;
    font-family: 'Sora', sans-serif;
    font-weight:bold 600;
`
export const Paragrafo = styled.p`
    font-family:'Inter', sans-serif;
    text-align:center;
    margin-bottom:3rem;
`
export const ContainerCenter1 = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    @media(max-width:425px){
        text-align:center;
    }
`
export const ContainerCenter2 = styled.div`
    display:flex;
    justify-content:space-between;
    @media(max-width:768px){
        flex-direction:column;
        align-items:center;
    }
`
export const Cart = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:#EFF8FF;
    width:30%;
    border-radius:1rem;
    padding:4rem 0.5rem 4rem 0.5rem;
    @media(max-width:768px){
        width:60%;
        margin-bottom:0.5rem;
    }
    @media(max-width:425px){
        width:80%;
    }
`
export const Cartb = styled(Cart)`
    background-color:#293145;
    color:#fff;
`
export const TituloCart = styled.p`
    font-size:2em;
    font-weight:600;
    text-transform:capitalize;
    font-family: 'Sora', sans-serif;
    color:#293145;
`
export const TituloCartB = styled(TituloCart)`
    color:#fff;
`
export const SubTituloCart = styled.p`
    font-size:2em;
    font-weight:700;
    text-align:justify;
    font-family: 'Roboto', sans-serif;
    color:#293145;
`
export const SubTituloCartB = styled(SubTituloCart)`
    color:#fff;
`
export const ParagrafoCart = styled.p`
    text-align:center;
    font-family:'Inter', sans-serif;
    font-weight:400;
    
`
export const Botao = styled.button`
    display:flex;
    align-items:center;
    justify-content:center ;
    background-color:#0F9AFE;
    border-radius:20px;
    border:none ;
    color:#fff;
    text-transform:capitalize;
    cursor:pointer;
    font-family: 'Inter', sans-serif;
    padding:0.8rem 1rem 0.8rem 1rem;
    width:70%;
    font-weight:700;
`
