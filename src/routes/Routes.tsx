import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SampleCalculator } from "@/screens";

const { Navigator, Screen } = createDrawerNavigator();

export const Routes = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Calculadora de amostras">
                <Screen
                    name="Calculadora de amostras"
                    component={SampleCalculator}
                    options={{
                        headerTitleAlign: "center",
                        headerStyle: { backgroundColor: "#8a00c2" },
                        headerTitleStyle: { color: "#ffffff" },
                        headerTintColor: "#ffffff"
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
};
