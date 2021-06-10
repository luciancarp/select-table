import React from 'react'

// Redux
import { Provider } from 'react-redux'
import store from './store'

// Style
import GlobalStyle from './style/GlobalStyle'

//Components
import Layout from './components/Layout'
import SelectTable from './components/SelectTable'

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Layout>
        <SelectTable />
      </Layout>
    </Provider>
  )
}

export default App
