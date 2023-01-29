
import { Button, SafeAreaView, Text } from "react-native";
import React from "react";


const GroupItem = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <Text>GroupItem for {route.params?.id}</Text>
      <Button title="Scan" onPress={() => navigation.navigate('scan')} />
    </SafeAreaView>
  )
}

export default GroupItem
