import * as S from "./styles";
import * as P from "./props";

export const DashedInput = ({ state, setState, type, placeholder }: P.Props) => {
    return (
        <S.Container>
            <S.Input
                keyboardType={type}
                placeholder={placeholder}
                value={state}
                onChangeText={(text: string) => setState(text)}
            />
        </S.Container>
    );
};
