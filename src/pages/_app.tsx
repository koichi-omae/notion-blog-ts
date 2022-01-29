import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import PageFooter from '../components/PageFooter';
import PageHeader from '../components/PageHeader';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageHeader />
      <Component {...pageProps} />
      <PageFooter />
    </>
  );
}

export default MyApp;
