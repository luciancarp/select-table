import { createGlobalStyle } from 'styled-components'
import { fontSizes, fonts, spaces, colors } from './global'

import './typography.css'
import './destyle.css'

const GlobalStyle = createGlobalStyle`


// custom ///


body,
  html,
  #root {
    font-family: ${fonts.body}, sans-serif;
    color:${colors.text};
    background-color: ${colors.background};
    font-size: ${fontSizes.regular};
    font-weight: 400;
    font-style: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${fonts.header}, sans-serif;
  }

  h1 {
    font-size: ${fontSizes.xlarge};
  }

  h2 { 
    font-size: ${fontSizes.large}
  }

  h3 {
    margin-bottom: ${spaces.regular};
    font-size: ${fontSizes.medium}
  }

  p {
    line-height: 1.5;
    margin-bottom: ${spaces.narrow};
  }
`

export default GlobalStyle
