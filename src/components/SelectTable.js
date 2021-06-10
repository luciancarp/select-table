import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { getFiles } from '../actions/file'

import Toolbar from './Toolbar'
import Table from './Table'

const SelectTable = ({ getFiles, file: { selectedFile, files } }) => {
  useEffect(() => {
    getFiles()
  }, [getFiles])

  return (
    <Container>
      <Toolbar />
      <Table />
    </Container>
  )
}

const Container = styled.div``

SelectTable.propTypes = {
  getFiles: PropTypes.func.isRequired,
  file: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  file: state.file,
})

export default connect(mapStateToProps, {
  getFiles,
})(SelectTable)
