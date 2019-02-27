import React from 'react';

import BookList from '../book-list';

import ShoppingCartTable from '../shopping-cart-table';

const HomePage = () => {

    const books = [
        {
            id: 1,
            title: 'Production-ready microservices',
            author: 'Amy Farawler'
        },
        {
            id: 2,
            title: 'Realease IT',
            author: 'John Maccain'
        }
    ];

    return (
        <div>
            <BookList books={books}/>
            <ShoppingCartTable />
        </div>
    );
};

export default HomePage;