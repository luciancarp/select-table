import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { colors, spaces } from '../style/global'

import TableRow from './TableRow'

const Table = ({ file: { files } }) => {
  return (
    <StyledTable>
      <tr>
        <StyledHeaders />
        <StyledHeaders>Name</StyledHeaders>
        <StyledHeaders>Device</StyledHeaders>
        <StyledHeaders>Path</StyledHeaders>
        <StyledHeaders>Status</StyledHeaders>
      </tr>

      {files.map((file) => (
        <TableRow id={file.id} />
      ))}
    </StyledTable>
  )
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const StyledHeaders = styled.th`
  padding: ${spaces.regular};
`

Table.propTypes = {
  file: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  file: state.file,
})

export default connect(mapStateToProps, {})(Table)
