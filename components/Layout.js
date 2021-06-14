import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="w-full">
      <Nav />
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center h-screen">
        { children }
      </main>
      <Footer />
    </div>
  )
}
