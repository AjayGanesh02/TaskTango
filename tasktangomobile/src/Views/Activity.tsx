import { Button, SafeAreaView, Text } from "react-native";
import React from "react";


const Activity = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Activity</Text>
      <Button title="Scan" onPress={() => navigation.navigate('scan')} />
    </SafeAreaView>
  )
}

export default Activity
