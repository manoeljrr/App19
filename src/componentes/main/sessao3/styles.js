import styled from "styled-components";

export const ContainerS3= styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    background-color: #EFF8FF;
    margin-top:2rem;
`
export const ContainerS3b= styled.div`
    width:80%;
    display:flex;
    justify-content:center;
    @media(max-width:1024px){
        flex-direction:column;
        align-items:center;
    }
`
export const ContainerLeft = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    @media(max-width:1024px){
        text-align:center;
        align-items:center;
        width:80%;
    }
`
export const ContainerRight = styled.div`
    width:50%;
    display:flex;
    justify-content:center;
    @media(max-width:768px){
        display:none;
    }
`
export const Titulo = styled.p`
    font-size:3em;
    font-family: 'Sora', sans-serif;
    font-weight:bold 600;
`
export const Img = styled.img`
    width:400px;
    height:400px;
`
export const Paragrafo = styled.p`
`
export const Paragrafo1 = styled.label`
    font-size:0.8em;
    text-align:left;
`
export const Paragrafo2 = styled.label`
    font-size:1.5em;
    text-align:left;
`
export const InfoBtn = styled.div`
    display:flex;
    flex-direction:column;
`
export const Icone = styled.i`
    font-size:2em;
    margin-right:0.5rem;
`
export const Botao = styled.button`
    display:flex;
    align-items:center;
    text-align:center;
    background-color:#293145;
    border-radius:20px;
    border:none ;
    color:#fff;
    text-transform:capitalize;
    cursor:pointer;
    font-family: 'Inter', sans-serif;
    padding:0.8rem 1rem 0.8rem 1rem;
    @media(max-width:425px){
        margin-bottom:1rem;
    }
`
export const ContainerBtn = styled.div`
    display:flex;
    justify-content:space-between;
    width:60%;
    @media(max-width:426px){
        flex-direction:column;
        width:60%;
    }
    @media(max-width:1280px){
        width:100%;
    }
`
