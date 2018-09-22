import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { NavigationActions, StackActions } from "react-navigation";
import {
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './reducer';

import saga from './saga';

const NavigationReduxMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav,
);
export default function create(client) {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware, NavigationReduxMiddleware];

    const store = createStore(
        reducers,
        applyMiddleware(...middleware),
    );

    persistStore(store);

    store.rootTask = sagaMiddleware.run(saga, client, store);

    return store;
}
