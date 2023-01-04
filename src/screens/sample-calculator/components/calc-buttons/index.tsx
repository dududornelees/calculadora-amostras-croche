import * as S from "./styles";

export const CalcButtons = () => {
    return (
        <S.Container>
            <S.CalcButton>
                <S.CalcButtonText>Calcular</S.CalcButtonText>
            </S.CalcButton>

            <S.CleanButton>
                <S.CleanButtonText>Limpar</S.CleanButtonText>
            </S.CleanButton>
        </S.Container>
    );
};
