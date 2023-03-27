import '../styles/globals.css'
import { store } from '../store'
import { Provider } from 'react-redux'
import Navbar from '../components/Navbar'
import { SessionProvider } from "next-auth/react"
import { Toaster } from 'react-hot-toast';
import NewFooter from '../components/NewFooter';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
      <Navbar />
      <Toaster/>
        <Component {...pageProps} />
      </SessionProvider>
      <NewFooter />
    </Provider>
  )
}

export default MyApp
