import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { selectAllFiles, deselectAllFiles } from '../actions/file'

import Checkbox from './Checkbox'

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
      <Checkbox checked={checked} onChange={() => handleChange()} />
      {selectedFiles.length > 0 ? (
        <h3>Selected {selectedFiles.length}</h3>
      ) : (
        <h3>None Selected</h3>
      )}
      <button onClick={() => handleDownload()}>Download</button>
    </Container>
  )
}

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
