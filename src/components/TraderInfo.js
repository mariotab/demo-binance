import React from 'react';
import PropTypes from 'prop-types'
import { styled } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCel from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paperr from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress'

const MyTable = styled(Table)({
  maxWidth: 250,
});
const Paper = styled(Paperr)({
  maxWidth: 250,
  margin: '20px 0 10px 20px',
  float: 'left'
});
const TableCell = styled(TableCel)({
  padding:  '2px 16px',
});

const TraderInfo = ({ loading, tableName, data, thColor }) => {
  if (loading) return <CircularProgress color="inherit"/>
  return (
    <TableContainer component={ Paper } >
      <MyTable aria-label="simple table">
        <TableHead>
        <TableRow>
            <TableCell align="center" colSpan={2}>{ tableName }</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Price</TableCell>
            <TableCell align="right" >Volum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { data.map(row => (
            <TableRow
            key={row[0]*Math.random()}
            style={thColor ? { backgroundColor: '#fff' } : row[2] ? { backgroundColor: 'red' } : { backgroundColor: 'green' }}
            >
              <TableCell align="left" >{ row[0] }</TableCell>
              <TableCell align="right" >{ row[1] }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MyTable>
    </TableContainer>
  )
}

TraderInfo.propTypes = {
  loading: PropTypes.bool.isRequired,
  tableName: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  thColor: PropTypes.bool.isRequired
}

export default TraderInfo
