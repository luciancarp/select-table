import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { selectFile } from '../actions/file'

const TableRow = ({ selectFile, file: { selectedFile, files }, id }) => {
  const rowData = files.find((file) => file.id === id)

  return (
    <StyledRow>
      <td>{rowData.name}</td>
      <td>{rowData.device}</td>
      <td>{rowData.path}</td>
      <td>{rowData.status}</td>
    </StyledRow>
  )
}

const StyledRow = styled.tr``

TableRow.propTypes = {
  selectFile: PropTypes.func.isRequired,
  file: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  file: state.file,
})

export default connect(mapStateToProps, {
  selectFile,
})(TableRow)
