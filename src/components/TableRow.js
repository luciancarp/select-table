import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { selectFile, deselectFile } from '../actions/file'

import Checkbox from './Checkbox'

const TableRow = ({
  selectFile,
  deselectFile,
  file: { selectedFiles, files },
  id,
}) => {
  const rowData = files.find((file) => file.id === id)

  let checked = selectedFiles.includes(id) ? 1 : -1

  const handleCheck = () => {
    checked === 1 ? deselectFile(id) : selectFile(id)
  }

  return (
    <StyledRow>
      <Checkbox status={checked} onChange={() => handleCheck()} />
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
  deselectFile: PropTypes.func.isRequired,
  file: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  file: state.file,
})

export default connect(mapStateToProps, {
  selectFile,
  deselectFile,
})(TableRow)
