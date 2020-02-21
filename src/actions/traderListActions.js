import { NEW_DATA_TRADER_LIST, LOADING_TRADER_LIST, HAS_ERROR_TRADER_LIST } from '../actionType/traderListActionType'
import axios from '../binance-api-service/axios'

export function toggleLoadingTraderList(loading) {
  return {
    type: LOADING_TRADER_LIST,
    loading
  }
}

export function newDataTraderList(data) {
  return {
    type: NEW_DATA_TRADER_LIST,
    data
  }
}

export function toggleErrorTraderList(error) {
  return {
    type: HAS_ERROR_TRADER_LIST,
    error
  }
}

export function fetchTraderList() {
  return async dispatch => {
    try {
      dispatch(toggleLoadingTraderList(true))
      const res = await axios.get('/fapi/v1/trades?symbol=BTCUSDT&limit=20')
      dispatch(newDataTraderList(res.data.map(item => [item.price, item.qty, item.isBuyerMaker])))
      dispatch(toggleLoadingTraderList(false))
    } catch (error) {
      console.log(error)
      dispatch(toggleErrorTraderList(error))
    }
  };
}
