import '@/styles/globals.css'
import { GuiaProvider } from '../../context/GuiaProvider'


export default function App({ Component, pageProps }) {
  return (
    <GuiaProvider>
      <Component {...pageProps} />
    </GuiaProvider>
  )
}
