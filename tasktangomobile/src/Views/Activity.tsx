import { Button, SafeAreaView, Text } from "react-native";
import React from "react";


const Activity = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1 flex-col h-screen justify-between">
      <Text>Activity</Text>
      <Button title="Scan" onPress={() => navigation.navigate('scan')} />
      <Footer />
    </SafeAreaView>
  )
}

export default Activity
