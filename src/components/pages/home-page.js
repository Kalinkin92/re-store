import React from 'react';

import BookList from '../book-list';

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
        <BookList books={books}/>
    )
};

export default HomePage;