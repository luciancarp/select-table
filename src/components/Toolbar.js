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
  const [status, setStatus] = useState(-1)

  useEffect(() => {
    const getCheckboxStatus = (selected, all) => {
      let status = 1

      if (selected.length === 0) return -1

      for (let i = 0; i < all.length; i++) {
        if (!selected.includes(all[i])) {
          status = 0
          break
        }
      }

      return status
    }

    setStatus(
      getCheckboxStatus(
        selectedFiles,
        files.map((file) => file.id)
      )
    )
  }, [selectedFiles, files])

  const handleChange = () => {
    if (status === -1 || status === 0) {
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
      <Checkbox status={status} onChange={() => handleChange()} />
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
