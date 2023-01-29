import { Button, SafeAreaView, Text } from "react-native";
import React from "react";

const Profile = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <Button title="Scan" onPress={() => navigation.navigate('scan')} />
    </SafeAreaView>
  )
}

export default Profile
