import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import {NextIntlProvider} from 'next-intl';

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout( <Component {...pageProps} />)
}

