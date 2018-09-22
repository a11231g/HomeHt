import nav from './Modules/nav';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { AsyncStorage } from "react-native";
import user from './Modules/user';

const config = {
    key: 'primary',
    storage,
    whitelist: [
        'user'
    ],
};
export default reducer = persistCombineReducers(config,
    {
        nav,
        user
    });
