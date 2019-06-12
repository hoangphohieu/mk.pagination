import { put, takeEvery } from 'redux-saga/effects';
import getAllItemsAPI from './../fetchAPI/GetAllItemsAPI';
import getPageItemsAPI from './../fetchAPI/GetPageItemsAPI';
import patchItemAPI from './../fetchAPI/PatchItemAPI';
import postItemAPI from './../fetchAPI/PostItemAPI';
import deleteItemAPI from './../fetchAPI/DeleteItemAPI';
import * as type from './../constants';

function* getAllItems(param) {
    console.log(param.payload);

    try {
        const res1 = yield getAllItemsAPI(param.payload);
        yield put({
            type: type.GET_ALL_ITEMS_SUCSESS,
            payload: res1
        })
        yield put({
            type: type.GET_TOTAL_PAGE,
            payload: Math.ceil(res1.length / 5)
        })


    } catch (error) {
        yield put({
            type: type.GET_ALL_ITEMS_RFAILURE,
            payload: {
                errorMessage: error.Message
            }
        })
    }

}


function* getPageItems(param) {

    try {
        const res1 = yield getPageItemsAPI(param.payload);
        yield put({
            type: type.GET_PAGE_ITEMS_SUCSESS,
            payload: res1
        })
        yield put({
            type: type.GET_ALL_ITEMS_REQUEST,
            payload: param.payload
        })


    } catch (error) {
        yield put({
            type: type.GET_PAGE_ITEMS_RFAILURE,
            payload: {
                errorMessage: error.Message
            }
        })
    }

}

function* patchItem(param) {

    try {
        const res1 = yield patchItemAPI(param.payload);
        yield put({
            type: type.PATCH_ITEM_SUCSESS,
            payload: res1
        })
        yield put({
            type: type.GET_PAGE_ITEMS_REQUEST,
            payload: param.payload
        })


    } catch (error) {
        yield put({
            type: type.PATCH_ITEM_RFAILURE,
            payload: {
                errorMessage: error.Message
            }
        })
    }

}

function* postItem(param) {
    try {
        const res1 = yield postItemAPI(param.payload);
        yield put({
            type: type.POST_ITEM_SUCSESS,
            payload: res1
        })
        yield put({
            type: type.GET_ALL_ITEMS_REQUEST,
            payload: param.payload
        })
        yield put({
            type: type.GET_PAGE_ITEMS_REQUEST,
            payload: param.payload
        })


    } catch (error) {
        yield put({
            type: type.POST_ITEM_RFAILURE,
            payload: {
                errorMessage: error.Message
            }
        })
    }

}


function* deleteItem(param) {
    console.log(param.payload);

    try {
        const res1 = yield deleteItemAPI(param.payload);
        yield put({
            type: type.DELETE_ITEM_SUCSESS,
            payload: res1
        })
        yield put({
            type: type.GET_ALL_ITEMS_REQUEST,
            payload: param.payload
        })
        yield put({
            type: type.GET_PAGE_ITEMS_REQUEST,
            payload: param.payload
        })

    } catch (error) {
        yield put({
            type: type.DELETE_ITEM_RFAILURE,
            payload: {
                errorMessage: error.Message
            }
        })
    }

}


export const IteamSaga = [
    takeEvery(type.GET_ALL_ITEMS_REQUEST, getAllItems),
    takeEvery(type.GET_PAGE_ITEMS_REQUEST, getPageItems),
    takeEvery(type.PATCH_ITEM_REQUEST, patchItem),
    takeEvery(type.POST_ITEM_REQUEST, postItem),
    takeEvery(type.DELETE_ITEM_REQUEST, deleteItem),





];   