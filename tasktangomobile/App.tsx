import React from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';
import Home from "./src/Views/Home";
import {useAuth0, Auth0Provider} from 'react-native-auth0';
import Login from "./src/Views/Login";
import { NavigationContainer } from "@react-navigation/native";

function App(): JSX.Element {

  return (
    <Auth0Provider
      domain={"dev-vtvguykkngefawuw.us.auth0.com"}
      clientId={"kGfME5u35rAJlivtMNn27U9ob7woJ6uQ"}
      cacheLocation="localstorage">
      <TailwindProvider>
        <NavigationContainer>
          <Home />
          {/*<Login />*/}
        </NavigationContainer>
      </TailwindProvider>
    </Auth0Provider>
  );
}

export default App;
