import { ChakraProvider } from "@chakra-ui/react";
import theme from "definitions/chakra/theme";
import "styles/global.scss";
import { initializeApollo } from "services/graphql";
import { ApolloProvider } from "@apollo/client";

import Home from "pages";

function App(): JSX.Element {
  const apolloClient = initializeApollo();
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <div className="App">
          <Home />
        </div>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
