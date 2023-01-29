import { Button, SafeAreaView, Text } from "react-native";
import React from "react";


const Scan = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Scan</Text>
      <Button title="Back to Login" onPress={() => navigation.navigate('login')} />
      <Button title="Alerts" onPress={() => navigation.navigate('alerts')} />
      <Button title="Groups" onPress={() => navigation.navigate('groups')} />
      <Button title="Activity" onPress={() => navigation.navigate('activity')} />
      <Button title="Profile" onPress={() => navigation.navigate('profile')} />
    </SafeAreaView>
  )
}

export default Scan
