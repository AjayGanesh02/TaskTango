import { SafeAreaView, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Scan from "./Scan";
import Groups from "./Groups";
import Activity from "./Activity";
import Profile from "./Profile";
import Alerts from "./Alerts";
import GroupItem from "./GroupItem";

const Stack = createNativeStackNavigator();
const Home = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="scan" component={Scan} />
      <Stack.Screen name="groups" component={Groups} />
      <Stack.Screen name="activity" component={Activity} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="alerts" component={Alerts} />
      <Stack.Screen name="group-item" component={GroupItem} />
    </Stack.Navigator>
  )
}

export default Home;
