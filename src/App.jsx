import { Navbar, Hero, Info, Product, Sellers, Footer } from "./components"
import { Element } from "react-scroll"
function App() {

  return (
    <div className="main-div">
      <header>
        <Element name="/" >
          <Navbar /> {/*✅*/}
        </Element>
      </header>
      <main>
        <Element name="/hero" >
          <Hero /> {/*✅*/}
        </Element>
        <Element name="/info">
          <Info /> {/*✅*/}
        </Element>
        <Element name="/products">
          <Product /> {/*✅*/}
        </Element>
        <Element name="/sellers">
          <Sellers /> {/*✅*/}
        </Element>
      </main>
      <footer >
        <Element name="/contact">
          <Footer /> {/*✅*/}
        </Element>

      </footer>
    </div>


  )
}

export default App
