import React from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";

function BookList({ data }) {
  function displayBooks() {
    const { loading, books } = data;
    if (loading) {
      return <div>Loading...</div>;
    } else {
      return books.map((book) => (
        <li className="collection-item" key={book.id}>
          <i className="material-icons circle">book</i>
          <span className="title">{book.name}</span>
        </li>
      ));
    }
  }

  return (
    <div className="container">
      <h3>Book List</h3>
      <div className="lighten-2">
        <ul>{displayBooks()}</ul>
      </div>
    </div>
  );
}

export default graphql(getBooksQuery)(BookList);
