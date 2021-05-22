import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import {Provider as AuthProvidder} from 'next-auth/client';

const MyApp = ({ Component, pageProps }) => {
  return (

    <AuthProvidder session={pageProps.session}>
      <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </AuthProvidder>
    
  )
}

export default MyApp
