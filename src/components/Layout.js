import React from 'react'
import styled from 'styled-components'

import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
    <div>
      <Content>{children}</Content>
    </div>
  )
}

const Content = styled.main`
  margin: 0 auto;
  max-width: 1024px;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
