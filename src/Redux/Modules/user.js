import { put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import Toast from 'react-native-root-toast';
import { NavigationActions } from 'react-navigation';

export const SUBMIT = 'home/user/SUBMIT';
export const SUBMIT_SUCCESS = 'home/user/SUBMIT_SUCCESS';
export const SUBMIT_FAILURE = 'home/user/SUBMIT_FAILURE';

const initialState = {
    loading: false,
    name: '',
    email: '',
    phone: '',
    salaryType: 0,
    error: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SUBMIT:
            return {
                ...state,
                loading: true
            };
        case SUBMIT_SUCCESS:
            console.log(action)
            return {
                ...state,
                loading: false,
                name: action.name,
                email: action.email,
                phone: action.phone,
                salaryType: action.salaryType
            };
        case SUBMIT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}


export function submitUser(name, email, phone, salaryType) {
    return {
        type: SUBMIT,
        name,
        email,
        phone,
        salaryType
    };
}

export function submitUserSuccess(name, email, phone, salaryType) {
    return {
        type: SUBMIT_SUCCESS,
        name,
        email,
        phone,
        salaryType
    };
}

export function submitUserFailure(error) {
    return {
        type: SUBMIT_FAILURE,
        error
    };
}

export function* watchSubmitUser(client, { name, email, phone, salaryType }) {
    try {
        console.log('here')
        yield delay(750);
        yield put(submitUserSuccess(name, email, phone, salaryType));
        Toast.show('updated successfully', {
            duration: 6000,
            position: Toast.positions.TOP,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
        });
        console.log(NavigationActions.navigate({routeName: 'Confirm'}))
        yield put(NavigationActions.navigate({routeName: 'Confirm'}));

    } catch (error) {
        yield put(submitUserFailure(error));
    }
}


