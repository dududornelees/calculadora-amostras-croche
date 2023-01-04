import { Container } from "@/common";
import { ToolCard } from "./components";
import * as S from "./styles";

export const ToolsList = () => {
    return (
        <Container>
            <S.TextCenter>Lorem ipsum Lorem ipsum</S.TextCenter>
            <ToolCard title="Calc. de amostras" route="Calculadora de amostras" />
        </Container>
    );
};
