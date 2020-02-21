import React from 'react';
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'

function Date({ data, loading }) {
  return <>{ loading ? <CircularProgress color="inherit"/> : data }</>
}

Date.propTypes = {
  data: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Date
