import React from "react";
import { ContainerHeader,Cabecalho,ContainerLeft,ContainerRight,Lista, Item,Titulo,Icone} from "./styles";

export default function Header(){
    return(
        <ContainerHeader>
            <Cabecalho>
                <ContainerLeft>
                    <Icone><i class="fas fa-shapes"></i></Icone>
                    <Titulo>Rachi</Titulo>
                </ContainerLeft>
                <ContainerRight>
                    <Lista>
                        <Item>funcionalidades</Item>
                        <Item>app</Item>
                        <Item>planos</Item>
                        <Item>contato</Item>
                    </Lista>
                </ContainerRight>
            </Cabecalho>
        </ContainerHeader>
    )
}