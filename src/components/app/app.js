import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, CartPage } from '../pages';
import ShopHeader from '../header';

const App = () => {

    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={210} />
            <Switch>
                <Route
                    path="/"
                    component={HomePage}
                    exact
                    // render={() => <span>HOMEPAGE</span>}
                />
                <Route
                    path="/cart"
                    component={CartPage}
                    exact
                    // render={() => <span>HOMEPAGE</span>}
                />
            </Switch>
        </main>
    )
};

export default App;