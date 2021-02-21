import { StoreProvider } from '../components/Store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Router from 'next/router'

// steup router with Nprogress
Router.events.on('routerChangeState', () => NProgress.start())
Router.events.on('routerChangeComplete', () => NProgress.done())
Router.events.on('routerChangeError', () => NProgress.done())

export default function MyApp({ pageProps, Component }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

MyApp.getInitialProps = async () => {
  return {
    pageProps: {
      commrecePublicKey: process.env.COMMERCE_PUBLIC_KEY,
    },
  }
}
