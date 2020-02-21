import { LOADING, NEW_DATE, HAS_ERROR } from '../actionType/dateActionType'
import axios from '../binance-api-service/axios'
import { dateConvert } from '../utils/dateConvert'

export function toggleLoading(loading) {
  return {
    type: LOADING,
    loading
  }
}

export function newDate(date) {
  return {
    type: NEW_DATE,
    date
  }
}

export function toggleError(error) {
  return {
    type: HAS_ERROR,
    error
  }
}

export function fetchDate() {
  return async dispatch => {
    try {
      dispatch(toggleLoading(true))
      const date = await axios('/fapi/v1/time',{
        method: 'get'
      })
      dispatch(newDate(dateConvert(date.data.serverTime)))
      dispatch(toggleLoading(false))
    } catch (error) {
      console.log(error)
      dispatch(toggleError(error))
    }
  };
}
