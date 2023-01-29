import { Button, View, Text, SafeAreaView } from "react-native";
import React from "react";
import Footer from "../Components/Footer";

const Alerts = ({navigation}) => {
  return (
    <View className= "flex-1 flex-col h-screen justify-between">
      <SafeAreaView>
        <Text>Alerts</Text>
      </SafeAreaView>
      <Button title="Scan" onPress={() => navigation.navigate('scan')} />
      <Footer/>
    </View>
  )
}

export default Alerts
