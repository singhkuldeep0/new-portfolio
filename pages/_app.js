import '../styles/globals.css'
import { store } from '../store'
import { Provider } from 'react-redux'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return( 
    <Provider store={store}>
      <Navbar/>

  <Component {...pageProps} />
      <Footer/>
  </Provider>
  )
}

export default MyApp
