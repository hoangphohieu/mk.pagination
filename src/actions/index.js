import * as type from './../constants';

export function getAllItems(payload) {
    return ({type: type.GET_ALL_ITEMS_REQUEST,payload})
}

export function getPageItems(payload) {
    return ({type: type.GET_PAGE_ITEMS_REQUEST,payload})
}

export function addItem(payload) {
    return ({type: type.POST_ITEM_REQUEST, payload})
}

export function updateItem(payload) {
    return ({type: type.PATCH_ITEM_REQUEST, payload})
}
export function deleteItem(payload) {
    return ({type: type.DELETE_ITEM_REQUEST, payload})
}

export function getActivePage(payload) {
    return ({type: type.GET_ACTIVE_PAGE, payload})
}

export function changeActivePage(payload) {
    return ({type: type.CHANGE_ACTIVE_PAGE,payload})
}

export function updateTextSearch(payload) {   
    return ({type: type.UPDATE_TEXT_SEARCH,payload})
}
export function getTotalPage(payload) {   
    return ({type: type.GET_TOTAL_PAGE,payload})
}

