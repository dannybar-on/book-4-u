import { utilService } from '../services/util.service.js';

const { Link } = ReactRouterDOM;

export function BookPreview({ book }) {
  return (
    <Link to={`/books/${book.id}`}>
      <div className="book-card" key={book.id}>
        <img src={book.thumbnail} />
        <p>
          {book.title}
          <br />
          {utilService.getCurrencySymbol(book.listPrice.currencyCode) + ' '}
          {book.listPrice.amount}
        </p>
      </div>
    </Link>
  );
}
