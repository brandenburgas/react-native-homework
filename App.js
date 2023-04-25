import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import Details from "./screens/Details";
import Loading from "./screens/Loading";
import Offers from "./screens/Offers";
import Summary from "./screens/Summary";
import { MyText } from "./utils/Typography";

const queryClient = new QueryClient();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View>
          <NavigationContainer theme={MyTheme}>
            <StatusBar style="auto" />
            <LinearGradient
              colors={["#00ADEE", "#35D5F5"]}
              style={styles.container}
            >
              <Stack.Navigator
                initialRouteName="Details"
                screenOptions={{
                  headerShadowVisible: false,
                  headerStyle: {
                    backgroundColor: "transparent",
                  },
                  headerTitleAlign: "center",
                }}
              >
                <Stack.Screen
                  name="Details"
                  component={Details}
                  options={{
                    headerTitle: () => (
                      <MyText regular white>
                        Draudimas
                      </MyText>
                    ),
                  }}
                />
                <Stack.Screen
                  name="Loading"
                  component={Loading}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Offers"
                  component={Offers}
                  options={{
                    headerTitle: () => (
                      <MyText regular white>
                        Draudimo pasiūlymai
                      </MyText>
                    ),
                    headerTintColor: "#fff",
                  }}
                />
                <Stack.Screen
                  name="Summary"
                  component={Summary}
                  options={{
                    headerTitle: () => (
                      <MyText regular white>
                        Užsakymo patvirtinimas
                      </MyText>
                    ),
                    headerTintColor: "#fff",
                  }}
                />
              </Stack.Navigator>
            </LinearGradient>
          </NavigationContainer>
        </View>
      </TouchableWithoutFeedback>
    </QueryClientProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
