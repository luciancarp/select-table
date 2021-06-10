import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getFiles } from '../actions/file'

const Table = ({ getFiles, file: { selectedFile, files } }) => {
  useEffect(() => {
    getFiles()
  }, [getFiles])

  return (
    <StyledTable>
      <tr>
        <th>Name</th>
        <th>Device</th>
        <th>Path</th>
        <th>Status</th>
      </tr>
    </StyledTable>
  )
}

const StyledTable = styled.table`
  width: 100%;
`

Table.propTypes = {
  getFiles: PropTypes.func.isRequired,
  file: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  file: state.file,
})

export default connect(mapStateToProps, {
  getFiles,
})(Table)
