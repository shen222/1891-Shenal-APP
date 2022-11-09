import * as React from 'react';

import { Text, View } from 'react-native';

import {Container} from "./styles/appStyles";
import Home from "./components/Home";

export default function App() {
  return (
        <Container>
            <Home />
        </Container>
  );
}

