import { StatusBar } from 'expo-status-bar';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {useAuth0, Auth0Provider} from 'react-native-auth0';
import config from './auth0-configuration';

const Home = () => {
  const {authorize, clearSession, user, getCredentials} = useAuth0();

  const onLogin = async () => {
    try {
      await authorize({scope: 'openid profile email'});
      const {accessToken} = await getCredentials();
      Alert.alert('AccessToken: ' + accessToken);
    } catch (e) {
      console.log(e);
    }
  };

  const loggedIn = user !== undefined && user !== null;

  const onLogout = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log('Log out cancelled');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Auth0Sample - Login </Text>
      {user && <Text>You are logged in as {user.name}</Text>}
      {!user && <Text>You are not logged in</Text>}
      <Button
        onPress={loggedIn ? onLogout : onLogin}
        title={loggedIn ? 'Log Out' : 'Log In'}
      />
    </View>
  );
};
export default function App() {
  return (
    <View className="bg-blue-400 mt-40">
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Auth0Provider domain={config.domain} clientId={config.clientId}>
        <Home />
      </Auth0Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
