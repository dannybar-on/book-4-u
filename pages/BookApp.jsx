import { bookService } from '../services/book.service.js';
import { BookList } from '../cmps/BookList.jsx';
import { BookFilter } from '../cmps/BookFilter.jsx';
import { BookAdd } from '../cmps/BookAdd.jsx';

export class BookApp extends React.Component {
  state = {
    books: [],
    filterBy: null,
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    bookService.query(this.state.filterBy).then((books) => {
      this.setState({ books });
    });
  }

  onAddBook = (book)=> {
    console.log('im adding')
    bookService.addBook(book).then(this.loadBooks)
}

  setFilterBy = (filterBy) => {
    this.setState(
      {
        filterBy,
      },
      this.loadBooks
    );
  };
  
  render() {
    const { books } = this.state;
    if (!books)
      return (
        <div className="app">
          <BookFilter setFilterBy={this.setFilterBy} />
          <h1>Loading......</h1>
        </div>
      );
    return (
      <div className="app">
        <BookAdd onAddBook={this.onAddBook} />
        <BookFilter setFilterBy={this.setFilterBy} />
        <BookList books={books} />
      </div>
    );
  }
}
