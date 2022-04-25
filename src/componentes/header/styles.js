import styled from "styled-components";

export const ContainerHeader = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
`
export const Cabecalho = styled.div`
    width:80%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
export const ContainerLeft = styled.div`
    display:flex;
    align-items:center;
    width:20%;
`
export const ContainerRight = styled.div`
    width:80%;
    display:flex;
    justify-content:flex-end;
    @media(max-width:769px){
        display:none;
    }
`
export const Icone = styled.i`
    color:#0F9AFE;
`
export const Titulo = styled.p`
    font-size:1.5em;
    font-weight:bold;
    margin-left:0.5rem;
`
export const Lista = styled.ul`
    list-style:none;
    display:flex;
    justify-content:space-around;
    width:50%;
`
export const Item = styled.li`
    text-transform:capitalize;
    font-size:1.5em;
    color:#6E7275;
    cursor:pointer;
`