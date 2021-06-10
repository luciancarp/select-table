import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Checkbox = ({ status, onChange }) => {
  const checkboxRef = React.useRef()

  useEffect(() => {
    //1 for checked
    //0 for indeterminate
    //-1 for not checked
    if (status === 1) {
      checkboxRef.current.checked = true
      checkboxRef.current.indeterminate = false
    } else if (status === -1) {
      checkboxRef.current.checked = false
      checkboxRef.current.indeterminate = false
    } else {
      checkboxRef.current.checked = false
      checkboxRef.current.indeterminate = true
    }
  }, [status])

  return (
    <Container>
      <StyledCheckbox
        type='checkbox'
        id='box'
        ref={checkboxRef}
        onChange={onChange}
      />
    </Container>
  )
}

const Container = styled.div``

const StyledCheckbox = styled.input``

Checkbox.propTypes = {
  onChange: PropTypes.func,
  status: PropTypes.number.isRequired,
}

export default Checkbox
