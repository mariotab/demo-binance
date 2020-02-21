import React,{ Component } from 'react'
import { connect } from 'react-redux'

export const withRedux = (dataType, fetchData) => {
  return WrappedComponent => {
    class WrappedComponentt extends Component{
      intervalID = null
      componentDidMount() {
        this.props.fetchData()
        this.intervalID =  setInterval(() => {
          this.props.fetchData()
        }, 120000)
      }
      componentWillUnmount() {
        clearInterval(this.intervalID)
      }
      render() {
        return <WrappedComponent
          data={this.props.data}
          loading={this.props.loading}
        />
      }
    }
    const mapStateToProps = state => {
      return {
        data: state[dataType].data,
        loading: state[dataType].loading
      }
    }
    return connect(mapStateToProps,{ fetchData })(WrappedComponentt)
  }
}
