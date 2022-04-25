import React from "react";
import { ContainerS4,ContainerS4b,ContainerCenter1,ContainerCenter2,Paragrafo,Titulo,Botao,Cart,SubTituloCart,SubTituloCartB,ParagrafoCart,TituloCart,TituloCartB,Cartb} from "./styles";
import "../../../index.css"

export default function S4(){
    return(
        <ContainerS4>
            <ContainerS4b>
                <ContainerCenter1>
                    <Titulo>
                        Nossos Planos
                    </Titulo>
                    <Paragrafo>
                        Amet in elementum nulla scelerisque dui, egestas at. <br/>Elit consectetur turpis elementum amet vitae et etiam nec. Varius volutpat hac adipiscing tincidunt pretium.
                    </Paragrafo>
                </ContainerCenter1>
                <ContainerCenter2>
                    <Cart>
                        <TituloCart>
                            bronze
                        </TituloCart>
                        <SubTituloCart>
                            <sup>R$</sup>28/mês
                        </SubTituloCart>
                        <ParagrafoCart>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.
                        </ParagrafoCart>
                        <Botao>Assinar</Botao>
                    </Cart>
                    <Cartb>
                        <TituloCartB>
                            prata
                        </TituloCartB>
                        <SubTituloCartB>
                            <sup>R$</sup>57/mês
                        </SubTituloCartB>
                        <ParagrafoCart>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.
                        </ParagrafoCart>
                        <Botao>Assinar</Botao>
                    </Cartb>
                    <Cart>
                        <TituloCart>
                            ouro
                        </TituloCart>
                        <SubTituloCart>
                            <sup>R$</sup>94/mês
                        </SubTituloCart>
                        <ParagrafoCart>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.
                        </ParagrafoCart>
                        <Botao>Assinar</Botao>
                    </Cart>
                </ContainerCenter2>
            </ContainerS4b>
        </ContainerS4>
    )
}