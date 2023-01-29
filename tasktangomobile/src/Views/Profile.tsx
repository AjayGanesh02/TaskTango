import { Button, SafeAreaView, Text } from "react-native";
import React from "react";
import { useAuth0 } from "react-native-auth0";
import Footer from "../Components/Footer";

const Profile = ({navigation}) => {
  // handle logout logic
  const {clearSession} = useAuth0();
  const onPress = async () => {
    try {
      await clearSession();
      navigation.navigate('login')
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView className="flex-1 flex-col h-screen justify-between">
      <Text>Profile</Text>
      <Button onPress={onPress} title="Log out" />
      <Button title="Scan" onPress={() => navigation.navigate('scan')} />
      <Footer />
    </SafeAreaView>
  )
}

export default Profile
