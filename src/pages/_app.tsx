import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { GlobalStyles } from 'styles/GlobalStyles'

import composeStore from 'store'
import Layout from 'components/Layout'

const store = composeStore()

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <GlobalStyles />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
)

export default App
