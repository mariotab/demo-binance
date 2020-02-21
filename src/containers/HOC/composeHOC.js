import TraderInfo from '../../components/TraderInfo'
import Datee from '../../components/Date'
import {withTraderInfo} from './withTraderInfo'
import {withRedux} from './withRedux'
import {fetchTraderList} from '../../actions/traderListActions'
import {fetchOrderBook} from '../../actions/orderBookActions'
import {fetchDate} from '../../actions/dateActions'

const compose = (...func) => com => func.reduceRight((prevResult, f) => f(prevResult), com)

export  const OrderBook = compose(
                    withRedux('orderBook', fetchOrderBook),
                    withTraderInfo('Order book', true)
                  )(TraderInfo)
export  const TraderList = compose(
                    withRedux('traderList', fetchTraderList),
                    withTraderInfo('Trader list', false)
                  )(TraderInfo)
export const Date = withRedux('date', fetchDate)(Datee)
