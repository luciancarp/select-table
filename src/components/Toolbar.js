import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { selectAllFiles, deselectAllFiles } from '../actions/file'

import Checkbox from './Checkbox'
import { colors, spaces } from '../style/global'

const Toolbar = ({
  selectAllFiles,
  deselectAllFiles,
  file: { selectedFiles, files },
}) => {
  const [checked, setChecked] = useState(-1)

  useEffect(() => {
    const getCheckboxChecked = (selected, all) => {
      let checked = 1

      if (selected.length === 0) return -1

      for (let i = 0; i < all.length; i++) {
        if (!selected.includes(all[i])) {
          checked = 0
          break
        }
      }

      return checked
    }

    setChecked(
      getCheckboxChecked(
        selectedFiles,
        files.map((file) => file.id)
      )
    )
  }, [selectedFiles, files])

  const handleChange = () => {
    if (checked === -1 || checked === 0) {
      selectAllFiles()
    } else {
      deselectAllFiles()
    }
  }

  const handleDownload = () => {
    let download = files
      .filter((file) => selectedFiles.includes(file.id))
      .map((file) => {
        return {
          path: file.path,
          device: file.device,
        }
      })
    window.alert(JSON.stringify(download))
  }

  return (
    <Container>
      <CheckboxContainer>
        <Checkbox checked={checked} onChange={() => handleChange()} />
      </CheckboxContainer>
      {selectedFiles.length > 0 ? (
        <Title>Selected {selectedFiles.length}</Title>
      ) : (
        <Title>None Selected</Title>
      )}
      <button onClick={() => handleDownload()}>
        <Title>⤓ Download</Title>
      </button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const CheckboxContainer = styled.div`
  padding: ${spaces.regular};
`

const Title = styled.h3`
  margin: 0 ${spaces.regular} 0 ${spaces.regular};
`

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
