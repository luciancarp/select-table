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
  max-width: 1024px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
