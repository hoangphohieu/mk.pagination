import * as type from './../constants';
const INIT_STATE = {
      textSearch: null,
      totalPage: 69,
      activePage: 1
};
function valueToGetAPI(state = INIT_STATE, action) {

      switch (action.type) {
            case type.UPDATE_TEXT_SEARCH: // đổi textSearch 

                  return {
                        ...state,
                        textSearch: action.payload
                  };
            case type.GET_TOTAL_PAGE_SUCSESS:  // đổi totalPage
                  return {
                        ...state,
                        totalPage: action.payload
                  };

            case type.CHANGE_ACTIVE_PAGE:  // đổi activePage
                  return {
                        ...state,
                        activePage: action.payload
                  };
            case type.CHANGE_TEXT_SEARCH_TO_NULL:  // chuyển textSearch về null
                  return {
                        ...state,
                        textSearch: null
                  };


            default:
                  return state;
      }
} export default valueToGetAPI;