import { NEW_DATA_ORDER_BOOK, LOADING_ORDER_BOOK, HAS_ERROR_ORDER_BOOK } from '../actionType/orderBookActionType'

const initialState = {
  data: [
    ["ERROR", "EROOR"]
  ],
  loading: false,
  error: null
}

export const orderBookReducer = function (state = initialState, action) {
  switch (action.type) {
    case NEW_DATA_ORDER_BOOK:
      return {
        ...state,
        data: action.data
      }
      case LOADING_ORDER_BOOK:
         return {
          ...state,
          loading: action.loading
        }
      case HAS_ERROR_ORDER_BOOK:
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
