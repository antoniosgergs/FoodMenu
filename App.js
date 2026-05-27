import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import DetailsMealScreen from "./screens/DetailMealScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <>
        <StatusBar style="light" />
          <NavigationContainer>
              <Stack.Navigator
                  screenOptions={{
                      headerStyle: {backgroundColor:"#2d022d"},
                      headerTintColor:"#ffffff",
                      contentStyle: {backgroundColor:"#4b1a4b"}
                 }} >
                  <Stack.Screen
                      name="MealsCategories"
                      component={CategoriesScreen}
                      options={{
                      title: 'All Meals Categories ',
                  }}/>
                  <Stack.Screen name="MealsOverview"
                                component={MealsOverviewScreen
                  }/>
                  <Stack.Screen name="MealDetail" component={DetailsMealScreen}/>
              </Stack.Navigator>
          </NavigationContainer>
      </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
