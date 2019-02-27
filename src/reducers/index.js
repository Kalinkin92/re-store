const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [
        /*{
            id: 1001, title: 'A book 1', count: 3, total: 150
        },
        {
            id: 1002, title: 'A book 2', count: 1, total: 70
        },*/
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
        title = book.title} = item;

    return {
        id,
        title,
        count: count + 1,
        total: Math.floor((count + 1) * book.price * 100) / 100
    };
};

const getOrderTotal = (items = []) => {
    const orderTotal = items.reduce((acc, item) => {
        acc = acc + item.total;
        return acc;
    }, 0);

    return Math.floor(orderTotal * 100) / 100
};

const reducer = (state = initialState, action) => {
    // console.log(action.type);
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
            const cartItems = updateCartItems(state.cartItems, newItem, itemIdx)

            // console.log(getOrderTotal(cartItems));
            return {
                ...state,
                cartItems,
                orderTotal: getOrderTotal(cartItems)
            };
        }

        case 'BOOK_DELETED_FROM_CART': {
            const id = action.payload;
            const idx = state.cartItems.findIndex((item) => item.id === id);
            const cartItems = [
                ...state.cartItems.slice(0, idx),
                ...state.cartItems.slice(idx + 1)
            ];
            return {
                ...state,
                cartItems,
                orderTotal: getOrderTotal(cartItems)
            }
        }

        case 'BOOK_DECREASE_COUNT': {
            const id = action.payload;
            const book = state.books.find((book) => book.id === id);
            const idx = state.cartItems.findIndex((item) => item.id === id);
            const item = state.cartItems[idx];
            const { count, total } = item;

            const cartItems = [
                ...state.cartItems.slice(0, idx),
                {
                    ...item,
                    count: count > 1 ? count - 1 : count,
                    total: count > 1 ? Math.floor((count - 1) * book.price * 100) / 100 : total
                },
                ...state.cartItems.slice(idx + 1)
            ];
            return {
                ...state,
                cartItems,
                orderTotal: getOrderTotal(cartItems)
            }
        }

        case 'BOOK_INCREASE_COUNT': {
            const id = action.payload;
            const book = state.books.find((book) => book.id === id);
            const idx = state.cartItems.findIndex((item) => item.id === id);
            const item = state.cartItems[idx];
            const { count } = item;

            const cartItems = [
                ...state.cartItems.slice(0, idx),
                {
                    ...item,
                    count: count + 1,
                    total: Math.floor((count + 1) * book.price * 100) / 100
                },
                ...state.cartItems.slice(idx + 1)
            ];
            return {
                ...state,
                cartItems,
                orderTotal: getOrderTotal(cartItems)
            }
        }

        default:
            return state;
    }
};


export default reducer;