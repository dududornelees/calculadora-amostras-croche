import { StatusBar } from "react-native";
import * as S from "./styles";

export const Home = () => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#52307c" />

            <S.TitleContainer>
                <S.Title>Calculadora de Amostras</S.Title>
            </S.TitleContainer>

            <S.Container>
                <S.InputsContainer>
                    <S.TextInput placeholder="ex: 52 pontos" />
                    <S.TextInput placeholder="ex: 4 carreiras" />
                </S.InputsContainer>

                <S.InputsContainer>
                    <S.TextInput placeholder="ex: 5cm" />
                    <S.TextInput placeholder="ex: 5cm" />
                </S.InputsContainer>

                <S.InputsContainer>
                    <S.TextInput placeholder="ex: 5cm" />
                    <S.TextInput placeholder="ex: 5cm" />
                </S.InputsContainer>
            </S.Container>
        </>
    );
};
