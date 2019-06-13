import * as type from './../constants';
                                                            // valueToGetAPI:{
                                                            //     textSearch: ***,
                                                            //     activePage: ***,
                                                            //     totalPage: ***
                                                            // }
export function getTotalPageAPI(payload) {                  // gọi lên itemSaga và itemsReducer 
    return ({type: type.GET_TOTAL_PAGE_REQUEST,payload})    // payload:valueToGetAPI
}

export function getPageItemsAPI(payload) {                  // gọi lên itemSaga và itemsReducer 
    return ({type: type.GET_PAGE_ITEMS_REQUEST,payload})    // payload: valueToGetAPI
}

export function addItemAPI(payload) {                       // gọi lên itemSaga và itemsReducer 
    return ({type: type.POST_ITEM_REQUEST, payload})        // payload: {...valueToGetAPI,bodyAdd: { name:*str*, isDone:false } }
}

export function updateItemAPI(payload) {                    // gọi lên itemSaga và itemsReducer
    return ({type: type.PATCH_ITEM_REQUEST, payload})       // payload: {...valueToGetAPI,id:*int*}
}
export function deleteItemAPI(payload) {                    // gọi lên itemSaga và itemsReducer 
    return ({type: type.DELETE_ITEM_REQUEST, payload})      // // payload: {...valueToGetAPI,id:*int*}
}

export function changeActivePage(payload) {                 // gọi lên valueToGetAPIReducer
    return ({type: type.CHANGE_ACTIVE_PAGE,payload})        // payload: *int*
}

export function updateTextSearch(payload) {                  // gọi lên valueToGetAPIReducer
    return ({type: type.UPDATE_TEXT_SEARCH,payload})         // payload: *str*
}
export function getTotalPage(payload) {                      // gọi lên valueToGetAPIReducer
    return ({type: type.GET_TOTAL_PAGE,payload})             // payload: *str* 
}

