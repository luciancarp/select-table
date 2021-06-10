import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { getFiles } from '../actions/file'

import Toolbar from './Toolbar'
import Table from './Table'

import { colors } from '../style/global'

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

const Container = styled.div`
  width: 100%;

  border: 1px solid ${colors.highlightSecondary};
  box-shadow: 0px 2px 10px ${colors.highlight};
`

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
