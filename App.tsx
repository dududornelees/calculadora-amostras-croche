import { Routes } from "@/routes";
import { DefaultTheme } from "@/themes";
import { ThemeProvider } from "styled-components/native";
import { useFonts } from "expo-font";
import "react-native-gesture-handler";

export default function App() {
    const [fontsLoaded] = useFonts({
        "Josefin-Sans-Regular": require("./assets/fonts/JosefinSans-Regular.ttf"),
        "Josefin-Sans-SemiBold": require("./assets/fonts/JosefinSans-SemiBold.ttf"),
        "Josefin-Sans-Bold": require("./assets/fonts/JosefinSans-Bold.ttf")
    });

    return fontsLoaded ? (
        <ThemeProvider theme={DefaultTheme}>
            <Routes />
        </ThemeProvider>
    ) : null;
}
