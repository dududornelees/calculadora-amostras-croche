import styled from "styled-components";
import { View } from "react-native";
import { TextInput } from "@react-native-material/core";

export const Container = styled(View)`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    padding: 8px;
`;

export const StyledTextInput = styled(TextInput)`
    width: 50%;
    padding: 8px;
`;
