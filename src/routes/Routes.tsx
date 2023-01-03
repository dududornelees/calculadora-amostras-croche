import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Modules, SampleCalculator } from "@/screens";

const { Navigator, Screen } = createDrawerNavigator();

export const Routes = () => {
    return (
        <NavigationContainer>
            <Navigator
                initialRouteName="Módulos"
                screenOptions={{
                    headerTitleAlign: "center",
                    headerStyle: { backgroundColor: "#82a6b1" },
                    headerTitleStyle: { color: "#ffffff" },
                    headerTintColor: "#ffffff"
                }}
            >
                <Screen name="Módulos" component={Modules} />
                <Screen name="Calculadora de amostras" component={SampleCalculator} />
            </Navigator>
        </NavigationContainer>
    );
};
