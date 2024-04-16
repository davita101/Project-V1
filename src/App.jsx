import { Navbar, Hero, Info, Product, Sellers, Footer } from "./components"

function App() {

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Info />
        <Product />
        <Sellers />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>


  )
}

export default App
