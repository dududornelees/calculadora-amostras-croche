import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "@/pages";

const { Navigator, Screen } = createDrawerNavigator();

export const Routes = () => {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerTitle: "Calculadora de amostras",
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
