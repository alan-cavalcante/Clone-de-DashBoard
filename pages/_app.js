import '../styles/globals.css'
import '../functions/requisitions'
import { AppProvider } from '../dados/context/AppContext'

function MyApp({ Component, pageProps }) {

  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>

  )
}

export default MyApp
