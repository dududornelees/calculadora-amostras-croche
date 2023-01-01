import styled from "styled-components/native";

export const TitleContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    color: #8a00c2;
    font-size: 30px;
    width: 180px;
    text-align: center;
    font-family: "Josefin-Sans-SemiBold";
`;

export const Container = styled.View`
    flex: 5;
    flex-direction: column;
    padding: 0px 20px;
`;

export const InputsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const TextInput = styled.TextInput`
    border: 2px solid #aaaaaa;
    padding: 0px 12px;
    border-radius: 8px;
    width: 48%;
    height: 45px;
`;
