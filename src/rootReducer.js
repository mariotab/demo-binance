import { combineReducers } from 'redux'
import { dateReducer } from './reducers/dateReducer'
import { orderBookReducer } from './reducers/orderBookReducer'
import { traderListReducer } from './reducers/traderListReducer'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  date: dateReducer,
  orderBook: orderBookReducer,
  traderList: traderListReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
