import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center h-screen">
        { children }
      </main>
      <Footer />
    </div>
  )
}
