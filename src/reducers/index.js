const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [
        {
            id: 1001, title: 'A book 1', count: 3, total: 150
        },
        {
            id: 1002, title: 'A book 2', count: 1, total: 70
        },
    ],
    orderTotal: 0
};

const updateCartItems = (cartItems, item, idx) => {
    if (idx === -1) {
        return [...cartItems, item];
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
};

const updateCartItem = (book, item = {}) => {
    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0 } = item;

    return {
        id,
        title,
        count: count + 1,
        total: total + book.price
    };
};

const reducer = (state = initialState, action) => {


    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST' :
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            };

        case 'FETCH_BOOKS_SUCCESS' :
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };

        case 'BOOK_ADDED_TO_CART': {
            const id = action.payload;
            const book = state.books.find((book) => book.id === id);
            const itemIdx = state.cartItems.findIndex((item) => item.id === id);
            const item = state.cartItems[itemIdx];
            const newItem = updateCartItem(book, item);

            return {
                ...state,
                cartItems: updateCartItems(state.cartItems, newItem, itemIdx)
            };
        }

        case 'BOOK_DELETED_FROM_CART': {
            const id = action.payload;
            const idx = state.cartItems.findIndex((item) => item.id === id);
            return {
                ...state,
                cartItems: [
                    ...state.cartItems.slice(0, idx),
                    ...state.cartItems.slice(idx + 1)
                ]
            }
        }

        default:
            return state;
    }
};


export default reducer;