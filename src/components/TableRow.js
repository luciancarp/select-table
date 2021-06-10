import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { selectFile, deselectFile } from '../actions/file'

import Checkbox from './Checkbox'
import { colors, spaces } from '../style/global'

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

  const ScheduledStatus = () => (
    <>
      <span>Scheduled</span>
    </>
  )
  const AvailableStatus = () => (
    <AvailableContainer>
      <Circle />
      <span>Available</span>
    </AvailableContainer>
  )

  return (
    <StyledRow selected={selectedFiles.includes(id)}>
      <StyledData>
        <Checkbox checked={checked} onChange={() => handleCheck()} />
      </StyledData>
      <StyledData>{rowData.name}</StyledData>
      <StyledData>{rowData.device}</StyledData>
      <StyledData>{rowData.path}</StyledData>
      <StyledData>
        {rowData.status === 'available' ? (
          <AvailableStatus />
        ) : (
          <ScheduledStatus />
        )}
      </StyledData>
    </StyledRow>
  )
}

const StyledRow = styled.tr`
  border: 1px solid ${colors.highlightSecondary};

  background-color: ${(props) =>
    props.selected ? `${colors.highlight}` : null};

  :hover {
    background-color: ${colors.highlightSecondary};
  }
`

const StyledData = styled.td`
  padding: ${spaces.regular};

  text-align: left;
  vertical-align: middle;
`

const AvailableContainer = styled.div`
  margin-left: -3.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Circle = styled.div`
  width: ${spaces.regular};
  height: ${spaces.regular};

  margin-right: ${spaces.narrow};

  border-radius: 50%;

  background-color: green;
`

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
