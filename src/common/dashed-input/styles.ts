import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: column;
`;

export const Input = styled.TextInput`
    border: 1px dashed ${(props) => props.theme.colors.primary};
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: white;
    margin-bottom: 16px;
    font-size: 16px;
    height: 50px;
    width: 100%;
    padding: 0px 16px;
`;
