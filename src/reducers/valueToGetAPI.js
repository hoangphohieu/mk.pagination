import * as type from './../constants';
const INIT_STATE = {
      textSearch: null,
      totalPage: 69    ,
      activePage:1
};
function valueToGetAPI(state = INIT_STATE, action) {

      switch (action.type) {
            case type.UPDATE_TEXT_SEARCH:

                  return {
                        ...state,
                        textSearch: action.payload
                  };
            case type.GET_TOTAL_PAGE:
                  return {
                        ...state,
                        totalPage: action.payload
                  };

            case type.CHANGE_ACTIVE_PAGE:
                  return {
                        ...state,
                        activePage: action.payload
                  };
                  case type.CHANGE_TEXT_SEARCH_TO_NULL:
                        return {
                              ...state,
                              textSearch: null
                        };
                  

            default:
                  return state;
      }
} export default valueToGetAPI;