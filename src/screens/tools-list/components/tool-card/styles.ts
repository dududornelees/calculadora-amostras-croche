import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.colors.primary};
    margin-bottom: 12px;
    height: 50px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const Text = styled.Text`
    font-size: 16px;
    color: white;
    text-align: center;
`;
