import React from "react";
import BookList from "./components/BookList";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import AddBook from "./components/AddBook";
import NavBar from "./components/NavBar";

const client = new ApolloClient({
  uri: "http://localhost:7000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <NavBar />
      <AddBook />
      <BookList />
    </ApolloProvider>
  );
}

export default App;
