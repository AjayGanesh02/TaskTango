import React from 'react';
import { TailwindProvider } from 'tailwindcss-react-native';
import Home from "./src/Views/Home";

function App(): JSX.Element {

  return (
    <TailwindProvider>
      <Home />
    </TailwindProvider>
  );
}

export default App;
