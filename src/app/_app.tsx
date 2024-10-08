// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter, Lato } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${lato.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;