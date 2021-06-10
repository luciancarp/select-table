import React from 'react'

// Redux
import { Provider } from 'react-redux'
import store from './store'

// Style
import GlobalStyle from './style/GlobalStyle'

//Components
import Layout from './components/Layout'
import Table from './components/Table'

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Layout>
        <Table />
      </Layout>
    </Provider>
  )
}

export default App
