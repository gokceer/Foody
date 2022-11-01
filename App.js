import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { store } from "./store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Restaurant"
            component={RestaurantScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
