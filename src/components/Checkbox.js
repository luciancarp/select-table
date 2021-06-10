import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Checkbox = ({ checked, onChange }) => {
  const checkboxRef = React.useRef()

  useEffect(() => {
    //1 for checked
    //0 for indeterminate
    //-1 for not checked
    if (checked === 1) {
      checkboxRef.current.checked = true
      checkboxRef.current.indeterminate = false
    } else if (checked === -1) {
      checkboxRef.current.checked = false
      checkboxRef.current.indeterminate = false
    } else {
      checkboxRef.current.checked = false
      checkboxRef.current.indeterminate = true
    }
  }, [checked])

  return (
    <StyledCheckbox
      type='checkbox'
      id='box'
      ref={checkboxRef}
      onChange={onChange}
    />
  )
}

const StyledCheckbox = styled.input``

Checkbox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.number.isRequired,
}

export default Checkbox
