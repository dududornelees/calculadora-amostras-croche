import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

export const Title = styled.Text`
    width: 100%;
    margin-bottom: 16px;
    text-align: center;
    font-size: 16px;
`;

export const ResultBox = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ResultText = styled.Text`
    color: ${(props) => props.theme.colors.secondary};
    border-radius: ${(props) => props.theme.borderRadius};
    border: 2px dashed ${(props) => props.theme.colors.secondary};
    font-size: 24px;
    width: 100px;
    height: 50px;
    background-color: white;
    text-align: center;
    line-height: 50px;
`;

export const ResultLabel = styled.Text``;
