
const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST',
    }
};

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
};

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
};

const booksAddedToCart = (id) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: id
    }
};

const bookDeletedFromCart = (id) => {
    return {
        type: 'BOOK_DELETED_FROM_CART',
        payload: id
    }
};

const bookDecreaseCount = (id) => {
    return {
        type: 'BOOK_DECREASE_COUNT',
        payload: id
    }
};
//

const fetchBooks = (bookstoreService, dispatch) => () => {

    dispatch(booksRequested());
    bookstoreService
        .getBooks()
        .then(data => dispatch(booksLoaded(data)))
        .catch(error => dispatch(booksError(error)));
};

export {
    fetchBooks,
    booksAddedToCart,
    bookDeletedFromCart,
    bookDecreaseCount
};