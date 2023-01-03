import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import * as P from "./props";

export const ModuleCard = ({ title, route }: P.Props) => {
    const { navigate } = useNavigation();

    return (
        <S.Button onPress={() => navigate(route)}>
            <S.Text>{title}</S.Text>
        </S.Button>
    );
};
