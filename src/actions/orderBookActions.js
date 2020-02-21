import { NEW_DATA_ORDER_BOOK, LOADING_ORDER_BOOK, HAS_ERROR_ORDER_BOOK } from '../actionType/orderBookActionType'
import axios from '../binance-api-service/axios'

export function toggleLoadingOrderBook(loading) {
  return {
    type: LOADING_ORDER_BOOK,
    loading
  }
}

export function newDataOrderBook(data) {
  return {
    type: NEW_DATA_ORDER_BOOK,
    data
  }
}

export function toggleErrorOrderBook(error) {
  return {
    type: HAS_ERROR_ORDER_BOOK,
    error
  }
}

export function fetchOrderBook() {
  return async dispatch => {
    try {
      dispatch(toggleLoadingOrderBook(true))
      const res = await axios('/fapi/v1/depth?symbol=BTCUSDT&limit=10',{
        method: 'get'
      })
      dispatch(newDataOrderBook([...res.data.asks.reverse(),['BIDS','BIDS'], ...res.data.bids]))
      dispatch(toggleLoadingOrderBook(false))
    } catch (error) {
      console.log(error)
      dispatch(toggleErrorOrderBook(error))
    }
  };
}
