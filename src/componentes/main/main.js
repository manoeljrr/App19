import React from "react";
import S1 from "./sessao1/s1";
import S2 from "./sessao2/s2";
import S3 from "./sessao3/s3";
import S4 from "./sessao4/s4";
import S5 from "./sessao5/s5";
import { ContainerMain} from "./styles";

export default function Main(){
    return(
        <ContainerMain>
            <S1/>
            <S2/>
            <S3/>
            <S4/>
            <S5/>
        </ContainerMain>
    )
}