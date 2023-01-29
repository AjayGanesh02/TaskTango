import { Button, View, SafeAreaView, Text } from "react-native";
import React from "react";
import Footer from "../Components/Footer";


const Groups = ({navigation}) => {
  return (
    <View className="flex-1 flex-col h-screen justify-between">
      <SafeAreaView>
        <Text>Group</Text>
      </SafeAreaView>
      <Button title="Scan" onPress={() => navigation.navigate('scan')} />
      <Button title="Group Item" onPress={() => navigation.navigate('group-item', {id: "tmp id"})} />
      <Footer />
    </View>
  )
}

export default Groups
