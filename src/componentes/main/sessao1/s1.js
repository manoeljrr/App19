import React from "react";
import { ContainerS1,ContainerS1b,ContainerLeft,ContainerRight,Titulo,Img,Botao} from "./styles";
import Imagem from "../../../assets/img/img-s1.svg"

export default function S1(){
    return(
        <ContainerS1>
            <ContainerS1b>
                <ContainerLeft>
                    <Titulo>
                        Rachi, é tudo que você precisa em um só lugar.
                    </Titulo>
                    <Botao>cadastra-se</Botao>
                </ContainerLeft>
                <ContainerRight>
                    <Img src={Imagem}/>
                </ContainerRight>
            </ContainerS1b>
        </ContainerS1>
    )
}