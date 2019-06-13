import { put, takeEvery } from 'redux-saga/effects';
import getTotalPageAPI from './../fetchAPI/GetTotalPageAPI';
import getPageItemsAPI from './../fetchAPI/GetPageItemsAPI';
import patchItemAPI from './../fetchAPI/PatchItemAPI';
import postItemAPI from './../fetchAPI/PostItemAPI';
import deleteItemAPI from './../fetchAPI/DeleteItemAPI';
import * as type from './../constants';

function* getTotalPage(param) {     // lấy total page
    console.log(param);
    try {
        const res1 = yield getTotalPageAPI(param.payload); //gọi API
        yield put({
            type: type.GET_TOTAL_PAGE_SUCSESS, // trigger valueToGetAPIReducer , tính lại total Page
            payload: Math.ceil(res1.length / 5)
        })


    } catch (error) {
        yield put({
            type: type.GET_TOTAL_PAGE_RFAILURE, // trigger itemsReducer
            payload: {
                errorMessage: error.Message
            }
        })
    }

}


function* getPageItems(param) { // lấy về một page(x)

    try {
        const res1 = yield getPageItemsAPI(param.payload); // call API lấy về Items của page(x)
        yield put({
            type: type.GET_PAGE_ITEMS_SUCSESS, // trigger itemsReducer
            payload: res1
        })
        yield put({
            type: type.GET_TOTAL_PAGE_REQUEST,  // triger về itemSaga (về chính nó), để lấy totalPage
            payload: param.payload
        })


    } catch (error) {
        yield put({
            type: type.GET_PAGE_ITEMS_RFAILURE, // trigger itemReducer
            payload: {
                errorMessage: error.Message
            }
        })
    }

}

function* patchItem(param) {  // sửa Item

    try {
        const res1 = yield patchItemAPI(param.payload); // call API
        yield put({
            type: type.PATCH_ITEM_SUCSESS, // trigger itemsReducer
            payload: res1
        })
        yield put({
            type: type.GET_PAGE_ITEMS_REQUEST, // trigger về itemSaga, để tải lại page đó
            payload: param.payload
        })


    } catch (error) {
        yield put({
            type: type.PATCH_ITEM_RFAILURE, // trigger itemsReducer
            payload: {
                errorMessage: error.Message
            }
        })
    }

}

function* postItem(param) {  // thêm item
    try {
        const res1 = yield postItemAPI(param.payload); // cal API
        yield put({
            type: type.POST_ITEM_SUCSESS, // trigger itemsReducer báo là đã lấy thành công
            payload: res1
        })
        yield put({
            type: type.GET_TOTAL_PAGE_REQUEST, // trigger itemSaga, tính lại totalPage
            payload: param.payload
        })
        yield put({
            type: type.GET_PAGE_ITEMS_REQUEST, // trigger itemSaga,  lấy về items page 1
            payload: { ...param.payload, activePage: 1, textSearch: null }
        })
        yield put({
            type: type.CHANGE_ACTIVE_PAGE, // trigger itemSaga, đưa activePage về 1
            payload: 1
        })
        yield put({
            type: type.CHANGE_TEXT_SEARCH_TO_NULL // trigger valueToGetAPIReducer, chuyển textSearch = null

        })

    } catch (error) {
        yield put({
            type: type.POST_ITEM_RFAILURE, // trigger itemsReducer
            payload: {
                errorMessage: error.Message
            }
        })
    }

}


function* deleteItem(param) {  // xóa một item

    try {
        const res1 = yield deleteItemAPI(param.payload);// call API
        yield put({
            type: type.DELETE_ITEM_SUCSESS, // triger itemsReducer, thông báo xóa thành công
            payload: res1
        })
        yield put({
            type: type.GET_TOTAL_PAGE_REQUEST, // trigger itemSaga, tính tại totalPage
            payload: param.payload
        })

        // trường hợp delete item ở totalPage, sau khi khóa hết nó sẽ nhảy về totalPage mới
        const res2 = yield getTotalPageAPI(param.payload);// call API để tính total page
        if (Math.ceil(res2.length / 5) < param.payload.activePage) { // nếu totalPage < activePage
            yield put({                                              // thì get API, lấy item TotalPage
                type: type.GET_PAGE_ITEMS_REQUEST,
                payload: { ...param.payload, activePage: Math.ceil(res2.length / 5) }
            })
            yield put({                                              // và chuyển active về totalPage
                type: type.CHANGE_ACTIVE_PAGE,
                payload: Math.ceil(res2.length / 5)
            })

        }
        else {      // call API để lấy về item Page hiện tại

            yield put({
                type: type.GET_PAGE_ITEMS_REQUEST,
                payload: param.payload
            })
        }


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
    takeEvery(type.GET_TOTAL_PAGE_REQUEST, getTotalPage),
    takeEvery(type.GET_PAGE_ITEMS_REQUEST, getPageItems),
    takeEvery(type.PATCH_ITEM_REQUEST, patchItem),
    takeEvery(type.POST_ITEM_REQUEST, postItem),
    takeEvery(type.DELETE_ITEM_REQUEST, deleteItem),
];   