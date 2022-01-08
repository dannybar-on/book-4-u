export function BookListApi({ books, onAddBook }) {

  if (!books.length) return <p>No Books Found</p>


  return <ul className="search-results">
      {books.map((book) => {
          return <li key={book.id} onClick={()=> onAddBook(book)}>{book.volumeInfo.title}</li>
      })}
  </ul>


}
