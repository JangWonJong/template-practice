import '../styles/globals.css'
import Layout from '../components/common/Layout'
import { wrapper } from '@/modules/store'
import type { AppProps } from 'next/app'
import Footer from '@/components/common/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <Layout>  
    <Component {...pageProps} />
  </Layout>
  <Footer/>
  </>
)
}

export default wrapper.withRedux(MyApp)
