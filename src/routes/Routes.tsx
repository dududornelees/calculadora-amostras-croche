import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ToolsList, SampleCalculator } from "@/screens";

const { Navigator, Screen } = createNativeStackNavigator();

export const Routes = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Módulos">
                <Screen
                    name="Mundo Crochê"
                    component={ToolsList}
                    options={{
                        headerTitleAlign: "center",
                        headerStyle: { backgroundColor: "#2978a0" },
                        headerTitleStyle: { color: "#ffffff" },
                        headerTintColor: "#ffffff"
                    }}
                />

                <Screen
                    name="Calculadora de amostras"
                    component={SampleCalculator}
                    options={{
                        headerTitle: "",
                        headerStyle: { backgroundColor: "#f2f2f2" },
                        headerShadowVisible: false,
                        headerTintColor: "#2978a0"
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
};
