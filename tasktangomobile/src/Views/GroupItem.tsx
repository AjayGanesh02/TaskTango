
import { Button, SafeAreaView, Text } from "react-native";
import React from "react";
import Footer from "../Components/Footer";


const GroupItem = ({navigation, route}) => {
  return (
    <SafeAreaView className="flex-1 flex-col h-screen justify-between">
      <Text>GroupItem for {route.params?.id}</Text>
      <Button title="Scan" onPress={() => navigation.navigate('scan')} />
      <Footer />
    </SafeAreaView>
  )
}

export default GroupItem
