import { combineReducers } from 'redux';
import ItemsReducer from './ItemsReducer';
import valueToGetAPI  from './valueToGetAPI';
export default combineReducers({
      items: ItemsReducer,
      valueToGetAPI
})
