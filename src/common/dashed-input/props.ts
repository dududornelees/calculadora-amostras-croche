import { KeyboardType } from "react-native";

export type Props = {
    state: string;
    setState: (state: string) => void;
    type: KeyboardType;
    placeholder: string;
};
