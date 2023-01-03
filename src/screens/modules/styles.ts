import styled from "styled-components/native";

export const TextJustify = styled.Text`
    font-size: 16px;
    text-align: justify;
    margin-bottom: 12px;
`;

export const PrimaryColor = styled.Text`
    color: ${(props) => props.theme.colors.primary};
    font-weight: 500;
`;
