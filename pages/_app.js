import '../styles/globals.css'
import { store } from '../store'
import { Provider } from 'react-redux'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return( 
    <Provider store={store}>
      <Navbar/>
      <Toaster/>
  <Component {...pageProps} />
      <Footer/>
  </Provider>
  )
}

export default MyApp
