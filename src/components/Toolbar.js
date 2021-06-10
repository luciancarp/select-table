import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { selectAllFiles, deselectAllFiles } from '../actions/file'

const Toolbar = ({
  selectAllFiles,
  deselectAllFiles,
  file: { selectedFile, files },
}) => {
  useEffect(() => {
    checkboxRef.current.checked = true
    checkboxRef.current.indeterminate = true
  }, [])

  let checked = false

  const checkboxRef = React.useRef()

  return (
    <Container>
      <StyledCheckbox type='checkbox' id='box' ref={checkboxRef} />
      {/* <label for='box'>-</label> */}
      <h3>Selected</h3>
      <h3>Download</h3>
    </Container>
  )
}

const StyledCheckbox = styled.input`
  /* display: none; */
`

const Container = styled.div``

Toolbar.propTypes = {
  selectAllFiles: PropTypes.func.isRequired,
  deselectAllFiles: PropTypes.func.isRequired,
  file: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  file: state.file,
})

export default connect(mapStateToProps, {
  selectAllFiles,
  deselectAllFiles,
})(Toolbar)
