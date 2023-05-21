import { FETCH_USERS_FAIL, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes";
import axios from 'axios';

export const Fetchuserrequest = () => {
    return {
        type:FETCH_USERS_REQUEST,
    }
}
export const Fetchusersuccess = (users) => {
    return {
        type:FETCH_USERS_SUCCESS,
        payload:users,
    }
}

export const Fetchuserfail = (error) => {
    return {
        type:FETCH_USERS_FAIL,
        payload:error,
    }
}

export const FetchUsers = () => {
    return (dispatch) => {
        dispatch(Fetchuserrequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            const users = res.data;
            dispatch(Fetchusersuccess(users))
        }).catch((error) => {
            const errorMsg = error.message
            dispatch(Fetchuserfail(errorMsg))
        })

    }
}