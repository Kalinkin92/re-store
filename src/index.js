import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import { BookstoreServiceProvider } from './components/bookstore-service-context';
import BookstoreService from './services/bookstore-service';

import store from './store';

const bookstoreService = new BookstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookstoreServiceProvider value={bookstoreService}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);
