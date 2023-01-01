import { Routes } from "@/routes";
import { useFonts } from "expo-font";

export default function App() {
    const [fontsLoaded] = useFonts({
        "Josefin-Sans-Regular": require("./assets/fonts/JosefinSans-Regular.ttf"),
        "Josefin-Sans-SemiBold": require("./assets/fonts/JosefinSans-SemiBold.ttf"),
        "Josefin-Sans-Bold": require("./assets/fonts/JosefinSans-Bold.ttf")
    });

    return fontsLoaded ? <Routes /> : null;
}
