import { ChakraProvider } from "@chakra-ui/react"
import { ColorModeScript } from '@chakra-ui/react'
export default function App({ Component, pageProps }) {
  return <ChakraProvider><ColorModeScript initialColorMode="light"/><Component {...pageProps} /></ChakraProvider>
}
