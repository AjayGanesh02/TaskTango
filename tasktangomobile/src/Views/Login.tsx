import { Button, SafeAreaView, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useAuth0 } from "react-native-auth0";

const Login = ({navigation}) => {

  // handle user auth
  const {user} = useAuth0();
  const { authorize } = useAuth0();
  const onPress = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  // handle page navigation
  useEffect(() => {
    if(user) {
      navigation.navigate('scan')
    }
  }, [user])

  // display
  return (
    <SafeAreaView>
      <Text className="text-center">
        Please Log In
      </Text>
      <Button onPress={onPress} title="Log in" />
    </SafeAreaView>
  )
}

export default Login
