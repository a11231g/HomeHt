import { all, takeEvery } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';
import { watchRehydrate } from './Modules/rehydrate';
import {
    SUBMIT,
    watchSubmitUser
} from './Modules/user';
export default function* root(client, store) {
    yield all([
        takeEvery(REHYDRATE, watchRehydrate, store, client),
        takeEvery(SUBMIT, watchSubmitUser, client),
    ]);
}



