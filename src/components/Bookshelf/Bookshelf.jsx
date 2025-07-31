import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const [newBook, setNewBook] = useState({
    author: "",
    title: "",
  });
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const updatedBook = {
      ...newBook,
      [name]: value,
    };
    setNewBook(updatedBook);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({
      author: "",
      title: "",
    });
  };
  const formIsInvalid = Object.values(newBook).some((value) => value === "");

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>

        <form onSubmit={handleSubmit}>
          <label htmlFor="Title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <label htmlFor="Author">Author:</label>
          <input
            type="text"
            name="author"
            id="author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <button type="submit" disabled={formIsInvalid}>
            Submit
          </button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => {
          console.log("Rendering book:", book);
          return (
            <div key={index} className="bookCard">
              <h4>{book.title}</h4>
              <p>{book.author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bookshelf;
