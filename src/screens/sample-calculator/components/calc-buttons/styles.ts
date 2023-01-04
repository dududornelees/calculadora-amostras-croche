import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const CalcButton = styled.TouchableOpacity`
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: ${(props) => props.theme.borderRadius};
    height: 50px;
    width: 48%;
    justify-content: center;
    align-items: center;
`;

export const CalcButtonText = styled.Text`
    font-size: 16px;
    color: white;
`;

export const CleanButton = styled.TouchableOpacity`
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: white;
    height: 50px;
    width: 48%;
    justify-content: center;
    align-items: center;
`;

export const CleanButtonText = styled.Text`
    font-size: 16px;
    color: black;
`;
