import React from 'react'

export const withTraderInfo = (tableName, thColor) => {
  return WrappedComponent => {
    return props => {
        return <WrappedComponent
          {...props}
          tableName={tableName}
          thColor={thColor}
        />
    }
  }
}
