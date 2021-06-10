import React from 'react'

// Redux
import { Provider } from 'react-redux'
import store from './store'

// Style
import GlobalStyle from './style/GlobalStyle'

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      {/* <Layout>
        <Table />
      </Layout> */}
      <h3>Hello</h3>
    </Provider>
  )
}

export default App
