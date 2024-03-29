/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
   Text
} from 'react-native';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import RootContainer from './src/RootContainer';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

function App(): React.JSX.Element {

  return (
   <ApolloProvider client={client}>
      <RootContainer/>
   </ApolloProvider>
  );
}

export default App;
