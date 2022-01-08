import { bookService } from "../services/book.service.js";
import { BookListApi } from './BookListApi.jsx'

export class BookAdd extends React.Component{
    state = {
        title: '',
        googleBooks:[]
    }
    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState((prevState) => ({ ...prevState, [field]: value }));        
        bookService.getGoogleBook(this.state.title).then((books) =>
            this.setState({ googleBooks: books.items }))    
    }
    render() {
        const {googleBooks,title} = this.state
        return (
            <section className="book-add">
                <label>search book:</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter book name"
                    onChange={this.handleChange} />
                <BookListApi onAddBook={this.props.onAddBook} books={googleBooks}/>
            </section>
        )
    }
}