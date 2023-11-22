import { type ReactElement, type ReactNode, createElement } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import Layout from './layout'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  if (Component.getLayout) {
    return Component.getLayout(createElement(Component, pageProps))
  }
  return (
    <Layout>
      {createElement(Component, pageProps)}
    </Layout>
  )
}
