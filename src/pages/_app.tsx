import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import composeStore from 'store'

const store = composeStore()

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
)

export default App
