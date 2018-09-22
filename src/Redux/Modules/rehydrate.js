import { NavigationActions, StackActions } from 'react-navigation';

export const REHYDRATE_SUCCESS = 'home/rehydrate/REHYDRATE_SUCCESS';

export function rehydrateSuccess() {
    return {
        type: REHYDRATE_SUCCESS
    };
}

export function* watchRehydrate(store, client, action) {
    store.dispatch(StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Register' })],
    }));
    yield store.dispatch(rehydrateSuccess());
}
