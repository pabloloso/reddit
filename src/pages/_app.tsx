import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import { GlobalStyles } from 'styles/GlobalStyles'

import composeStore from 'store'

const store = composeStore()

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <GlobalStyles />
    <Component {...pageProps} />
  </Provider>
)

export default App
