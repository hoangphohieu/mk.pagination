import * as type from './../constants';
let DEFAULT_STATE = {
    listItem: [],
    dataFetched: false,
    isFetching: false,
    error: false,
    errorMessesage: null
}
export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {

        // get all items
        // case type.GET_ALL_ITEMS_REQUEST:
        //     return {
        //         ...state,
        //         isFetching: true
        //     }
        // case type.GET_ALL_ITEMS_SUCSESS:

        //     return {
        //         ...state,
        //         isFetching: false,
        //         dataFetched: true,
        //         error: false,
        //         errorMessesage: null,
        //         listItem: action.payload
        //     }

        // case type.GET_ALL_ITEMS_RFAILURE:
        //     return {
        //         ...state,
        //         isFetching: false,
        //         error: true,
        //         errorMessesage: action.payload.errorMessesage
        //     }


        // get page items
        case type.GET_PAGE_ITEMS_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case type.GET_PAGE_ITEMS_SUCSESS:

            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessesage: null,
                listItem: action.payload
            }

        case type.GET_PAGE_ITEMS_RFAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessesage: action.payload.errorMessesage
            }


        // updateitems
        case type.PATCH_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case type.PATCH_ITEM_SUCSESS:

            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessesage: null,
            }

        case type.PATCH_ITEM_RFAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessesage: action.payload.errorMessesage
            }


                 // post item
        case type.POST_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case type.POST_ITEM_SUCSESS:

            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                error: false,
                errorMessesage: null,
            }

        case type.POST_ITEM_RFAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessesage: action.payload.errorMessesage
            }

        default:
            return state;
    }
}