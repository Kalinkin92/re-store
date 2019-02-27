import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import './book-list.css';

import { withBookstoreService } from '../hoc';
import { fetchBooks, booksAddedToCart } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

class BookListContainer extends Component {

    componentDidMount () {
        this.props.fetchBooks();
    };

    render() {
        const { books, loading, error, onAddedToCart } = this.props;

        if(error) return <ErrorIndicator />;

        if(loading) return <Spinner />;

        return <BookList books={books} onAddedToCart={onAddedToCart}/>;
    };
}

const BookList = ({ books, onAddedToCart }) => {
    // const { books } = this.props;

    return (
        <ul className="book-list">
            {
                books.map((book) => {
                    const { id } = book;
                    return (
                        <li key={id}>
                            <BookListItem
                                onAddedToCart={() => onAddedToCart(id)}
                                book={book} />
                        </li>
                    );
                })
            }
        </ul>
    );
};

//Данные которые нужны от стэйта
const mapStateToProps = (state) => {
    return {
        books: state.books,
        loading: state.loading,
        error: state.error
    }
};

//Экшнс которые нужно дёргать бля изменения стэйта
const mapDispatchToProps = (dispatch, { bookstoreService }) => {
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(booksAddedToCart(id))
    }
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)
