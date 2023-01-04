import { StatusBar } from "react-native";
import { Routes } from "@/routes";
import { DefaultTheme } from "@/themes";
import { ThemeProvider } from "styled-components/native";

export default function App() {
    return (
        <ThemeProvider theme={DefaultTheme}>
            <StatusBar barStyle="light-content" backgroundColor={DefaultTheme.colors.primary} />
            <Routes />
        </ThemeProvider>
    );
}
