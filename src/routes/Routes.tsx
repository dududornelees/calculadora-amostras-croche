import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ToolsList, SampleCalculator } from "@/screens";

const { Navigator, Screen } = createNativeStackNavigator();

export const Routes = () => {
    return (
        <NavigationContainer>
            <Navigator
                initialRouteName="Módulos"
                screenOptions={{
                    headerTitleAlign: "center",
                    headerStyle: { backgroundColor: "#2978a0" },
                    headerTitleStyle: { color: "#ffffff" },
                    headerTintColor: "#ffffff"
                }}
            >
                <Screen name="Mundo Crochê" component={ToolsList} />
                <Screen name="Calculadora de amostras" component={SampleCalculator} />
            </Navigator>
        </NavigationContainer>
    );
};
