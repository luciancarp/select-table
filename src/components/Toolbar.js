import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { selectFile } from '../actions/file'

const Toolbar = ({ selectFile, file: { selectedFile, files } }) => {
  return (
    <Container>
      <h3>Selected</h3>
      <h3>Download</h3>
    </Container>
  )
}

const Container = styled.div``

Toolbar.propTypes = {
  selectFile: PropTypes.func.isRequired,
  file: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  file: state.file,
})

export default connect(mapStateToProps, {
  selectFile,
})(Toolbar)
