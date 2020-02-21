import { NEW_DATE, LOADING, HAS_ERROR } from '../actionType/dateActionType'

const initialState = {
  data: '00:00',
  loading: false,
  error: null
}

export const dateReducer = function (state = initialState, action) {
  switch (action.type) {
    case NEW_DATE:
      return {
        ...state,
        data: action.date
      }
      case LOADING:
         return {
          ...state,
          loading: action.loading
        }
      case HAS_ERROR:
        return {
          ...state,
          error: action.error,
          loading: false,
          data: 'ERROR'
        }
    default:
      return state
  }
}
