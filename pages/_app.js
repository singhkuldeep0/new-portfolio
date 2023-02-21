import '../styles/globals.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
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
