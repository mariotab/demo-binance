import { NEW_DATA_TRADER_LIST, LOADING_TRADER_LIST, HAS_ERROR_TRADER_LIST } from '../actionType/traderListActionType'

const initialState = {
  data: [
    ["ERROR", "EROOR"]
  ],
  loading: false,
  error: null
}

export const traderListReducer = function (state = initialState, action) {
  switch (action.type) {
    case NEW_DATA_TRADER_LIST:
      return {
        ...state,
        data: action.data
      }
      case LOADING_TRADER_LIST:
         return {
          ...state,
          loading: action.loading
        }
      case HAS_ERROR_TRADER_LIST:
        return {
          ...state,
          error: action.error,
          loading: false,
          data: [
            ["ERROR", "EROOR"]
          ]
        }
    default:
      return state
  }
}
