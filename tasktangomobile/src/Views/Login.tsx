import { Button, SafeAreaView, Text, View } from "react-native";
import React from "react";
import { useAuth0 } from "react-native-auth0";

const Profile = () => {
  const {user} = useAuth0();

  return (
    <Text className="text-blue-500">
      {user && <Text>Logged in as {user.name}</Text>}
      {!user && <Text>Not logged in</Text>}
    </Text>
  )
}
const LoginButton = () => {
  const {authorize} = useAuth0();

  const onPress = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} title="Log in" />
}
const LogoutButton = () => {
  const {clearSession} = useAuth0();

  const onPress = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} title="Log out" />
}

const Login = () => {
  return (
    <SafeAreaView>
      <Text className="bg-blue-500">Testing 123</Text>
      <Profile />
      <LoginButton />
      <LogoutButton />
    </SafeAreaView>
  )
}

export default Login
