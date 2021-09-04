import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import M from "materialize-css/dist/js/materialize";
import { addBookMutation, getAuthorsQuery } from "../queries/queries";

function AddBook() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");
  // const [loading, setLoading] = useState(false);

  //Using useQuery hooks from @apollo/react-hooks
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const bookMutation = useMutation(addBookMutation);

  function loadAuthors() {
    if (loading) {
      return <option disabled>Loading authors...</option>;
    } else {
      return data.authors.map((author) => (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      ));
    }
  }

  function submitForm(e) {
    e.preventDefault();
    console.log(authorId, name, genre);
  }

  useEffect(() => {
    M.AutoInit();
    loadAuthors();
  });

  console.log("From Server:", data, loading, error);
  return (
    <div className="container">
      <h3>Add a Book</h3>
      <form id="add-book" onSubmit={(e) => submitForm(e)}>
        <div className="field">
          <label>Book name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={(e) => setGenre(e.target.value)} />
        </div>
        <div className="field">
          <label>Author:</label>
          <select
            defaultValue={0}
            onChange={(e) => setAuthorId(e.target.value)}
          >
            <option>Select author</option>
            {loadAuthors()}
          </select>
        </div>
        <button className="btn-small btn-floating blue" onClick={submitForm}>
          <i className="material-icons">add</i>
        </button>
      </form>
    </div>
  );
}

export default AddBook;
