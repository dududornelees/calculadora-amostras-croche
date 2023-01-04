import { Container } from "@/common";
import { ToolCard } from "./components";
import * as S from "./styles";

export const ToolsList = () => {
    return (
        <Container>
            <S.TextJustify>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem</S.TextJustify>
            <ToolCard title="Calc. de amostras" route="Calculadora de amostras" />
        </Container>
    );
};
