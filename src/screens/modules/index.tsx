import { Container } from "@/common";
import { ModuleCard } from "./components";
import * as S from "./styles";

export const Modules = () => {
    return (
        <Container>
            <S.TextJustify>
                Bem-vindo ao <S.PrimaryColor>Mundo Crochê</S.PrimaryColor>! Aqui estão listados os módulos que temos
                disponíveis:
            </S.TextJustify>

            <ModuleCard title="Calculadora de amostras" route="Calculadora de amostras" />
        </Container>
    );
};
