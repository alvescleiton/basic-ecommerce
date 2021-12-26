import { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import Header from '@/Components/Header'
import { CartProvider } from '@/Hooks/CartHooks'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
      </CartProvider>
    </ThemeProvider>
  )
}

export default MyApp
