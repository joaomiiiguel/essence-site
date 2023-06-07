import './globals.css'
import { Inter } from 'next/font/google'

import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Essence Films',
  description: 'Essence Films est une agence de production audiovisuelle qui développe et produit, des contenus télévisuels et cinématographiques.',
}


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header/>
          {children}
        <Footer />
      </body>
    </html >
  )
}
