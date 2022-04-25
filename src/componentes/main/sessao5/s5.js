import React from "react";
import { ContainerS5,ContainerS5b,ContainerCenter,Paragrafo,Titulo, ContainerInput, Input, Botao} from "./styles";
import "../../../index.css"

export default function S5(){
    return(
        <ContainerS5>
            <ContainerS5b>
                <ContainerCenter>
                    <Titulo>contato</Titulo>
                    <Paragrafo>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Donec lacinia mi quis euismod ultrices.
                    </Paragrafo>
                    <ContainerInput>
                        <Input className="email" type="email" placeholder="Mande seu email"></Input>
                        <Botao>Enviar</Botao>
                    </ContainerInput>
                </ContainerCenter>
            </ContainerS5b>
        </ContainerS5>
    )
}