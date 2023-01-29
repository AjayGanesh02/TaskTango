import { Button, SafeAreaView, Text } from "react-native";
import React from "react";


const Alerts = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Alerts</Text>
      <Button title="Scan" onPress={() => navigation.navigate('scan')} />
    </SafeAreaView>
  )
}

export default Alerts
