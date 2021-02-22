import { StoreProvider } from '../components/Store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Router from 'next/router'
import { useEffect } from 'react'

// steup router with Nprogress
Router.events.on('routerChangeState', () => NProgress.start())
Router.events.on('routerChangeComplete', () => NProgress.done())
Router.events.on('routerChangeError', () => NProgress.done())

export default function MyApp({ pageProps, Component }) {
  useEffect(() => {
    //  remove the server-side injected css
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
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
