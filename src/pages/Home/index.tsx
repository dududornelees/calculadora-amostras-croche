import { StatusBar } from "react-native";
import { AppBar, HStack } from "@react-native-material/core";
import * as S from "./styles";

export const Home = () => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#52307c" />
            <AppBar title="Calculadora de Amostras" centerTitle color="#52307c" />

            <S.Container>
                <S.StyledTextInput label="1. Qtd. de pontos" variant="outlined" />
                <S.StyledTextInput label="2. Qtd. de carreiras" variant="outlined" />

                <S.StyledTextInput label="3. Largura da amostra" variant="outlined" />
                <S.StyledTextInput label="4. Altura da amostra" variant="outlined" />

                <S.StyledTextInput label="5. Peso da amostra" variant="outlined" />
                <S.StyledTextInput label="6. Largura desejada" variant="outlined" />

                <S.StyledTextInput label="7. Altura desejada" variant="outlined" />
            </S.Container>
        </>
    );
};
