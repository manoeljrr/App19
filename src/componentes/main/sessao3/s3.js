import React from "react";
import { ContainerS3,ContainerS3b,ContainerLeft,ContainerRight,Paragrafo,Titulo,Img,ContainerBtn,Botao,Icone,Paragrafo1,Paragrafo2,InfoBtn} from "./styles";
import Imagem from "../../../assets/img/img-s3.svg"

export default function S3(){
    return(
        <ContainerS3>
            <ContainerS3b>
                <ContainerLeft>
                    <Titulo>
                        Baixe nosso app para desfrutar mais!
                    </Titulo>
                    <Paragrafo>
                        Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur turpis elementum amet vitae et etiam nec. Varius volutpat hac adipiscing tincidunt pretium.
                    </Paragrafo>
                    <ContainerBtn>
                        <Botao>
                            <Icone><i class="fas fa-play"></i></Icone>
                            <InfoBtn>
                                <Paragrafo1>
                                    Get it on
                                </Paragrafo1>
                                <Paragrafo2>
                                    Google Play
                                </Paragrafo2>
                            </InfoBtn>
                        </Botao>
                        <Botao>
                            <Icone><i class="fab fa-apple"></i></Icone>
                            <InfoBtn>
                                <Paragrafo1>
                                    Download on the
                                </Paragrafo1>
                                <Paragrafo2>
                                    App Store
                                </Paragrafo2>
                            </InfoBtn>
                        </Botao>
                    </ContainerBtn>
                </ContainerLeft>
                <ContainerRight>
                    <Img src={Imagem}/>
                </ContainerRight>
            </ContainerS3b>
        </ContainerS3>
    )
}