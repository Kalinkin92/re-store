import React from 'react';

const {
    Provider: bookstoreServiceProvider,
    Consumer: bookstoreServiceConsumer
} = React.createContext();

export {
    bookstoreServiceProvider,
    bookstoreServiceConsumer
}