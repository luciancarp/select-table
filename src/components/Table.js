import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import TableRow from './TableRow'

const Table = ({ file: { files } }) => {
  return (
    <StyledTable>
      <tr>
        <th>Name</th>
        <th>Device</th>
        <th>Path</th>
        <th>Status</th>
      </tr>

      {files.map((file) => (
        <TableRow id={file.id} />
      ))}
    </StyledTable>
  )
}

const StyledTable = styled.table`
  width: 100%;
`

Table.propTypes = {
  file: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  file: state.file,
})

export default connect(mapStateToProps, {})(Table)
