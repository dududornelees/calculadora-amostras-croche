import { Text } from "react-native";
import { Container } from "@/common";
import * as S from "./styles";

export const Modules = () => {
    return (
        <Container>
            <Text>
                Bem-vindo ao <S.PrimaryColor>Mundo Crochê</S.PrimaryColor>! Aqui estão listados os módulos que temos
                disponíveis:
            </Text>
        </Container>
    );
};
