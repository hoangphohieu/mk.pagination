// file này để combine các reducer lại
import { combineReducers } from 'redux';
import ItemsReducer from './ItemsReducer';
import valueToGetAPI  from './valueToGetAPIReducer';
export default combineReducers({
      items: ItemsReducer,
      valueToGetAPI
})
