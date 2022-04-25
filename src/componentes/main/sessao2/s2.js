import React from "react";
import { ContainerS2,ContainerS2b,ContainerCenter,SubTitulo,Paragrafo,Cart,Titulo,Icone} from "./styles";

export default function S2(){
    return(
        <ContainerS2>
            <ContainerS2b>
                <Titulo>como funciona</Titulo>
                <ContainerCenter>
                    <Cart>
                        <Icone>
                            <i class="fas fa-user-plus"></i>
                        </Icone>
                        <SubTitulo>
                            criar conexões
                        </SubTitulo>
                        <Paragrafo>
                            Lorem ipsum dolor sit amet,consecteteu.
                        </Paragrafo>
                    </Cart>
                    <Cart>
                        <Icone>
                            <i class="fas fa-check"></i>
                        </Icone>
                        <SubTitulo>
                            100% gratuito
                        </SubTitulo>
                        <Paragrafo>
                            Lorem ipsum dolor sit amet,consecteteu.
                        </Paragrafo>
                    </Cart>
                    <Cart>
                        <Icone>
                            <i class="far fa-smile"></i>
                        </Icone>
                        <SubTitulo>
                            Compartilhamento
                        </SubTitulo>
                        <Paragrafo>
                            Lorem ipsum dolor sit amet,consecteteu.
                        </Paragrafo>
                    </Cart>
                </ContainerCenter>
            </ContainerS2b>
        </ContainerS2>
    )
}