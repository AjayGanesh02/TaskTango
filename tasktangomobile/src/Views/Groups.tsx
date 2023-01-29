import { Button, SafeAreaView, Text } from "react-native";
import React from "react";


const Groups = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Group</Text>
      <Button title="Scan" onPress={() => navigation.navigate('scan')} />
      <Button title="Group Item" onPress={() => navigation.navigate('group-item', {id: "tmp id"})} />
    </SafeAreaView>
  )
}

export default Groups
