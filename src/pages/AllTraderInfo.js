import React from 'react'
import {OrderBook} from '../containers/HOC/composeHOC'
import {TraderList} from '../containers/HOC/composeHOC'

export default function AllTraderInfo() {
  return (
    <>
      <OrderBook/>
      <TraderList/>
    </>
  );
}
