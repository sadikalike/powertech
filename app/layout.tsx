import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'PowerTech Buildcare | Home Maintenance & Building Solutions',
  description: 'Expert Electrical, Plumbing, Gas Pipeline, Waterproofing & Home Design Services in Puttur, D.K.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}