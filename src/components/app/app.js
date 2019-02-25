import React from 'react';
import ErrorBoundry from '../error-boundry';
import { withBookstoreService } from '../hoc';

const App = ({ bookstoreService }) => {

    console.log(bookstoreService.getBooks());

    return (
        <ErrorBoundry>
            <div className="container">
                <h2>Hello world</h2>
            </div>
        </ErrorBoundry>
    )
};

export default withBookstoreService()(App);