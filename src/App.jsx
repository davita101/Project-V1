import { useEffect } from "react"
import { Navbar, Hero, Info, Product, Sellers, Footer } from "./components"
import { Element } from "react-scroll"
import gsap from "gsap"
function App() {

  useEffect(() => {
    const mainDiv = document.getElementsByClassName('main-div')[0]
    const splitText = (text, addictt) => {

      const content = document.getElementById(`${text}`);
      const addict = addictt

      // Split text into individual characters
      const characters = content.innerText.split('');
      const counter = characters.length;

      // Clear the original content
      content.innerHTML = '';

      // Wrap each character in a span and append it back to the container
      characters.forEach((char, index) => {
        const charElement = document.createElement('span');
        if (index >= counter - 3 && addict) {
          charElement.classList.add('text-blue-500');
        }
        charElement.textContent = char;
        content.appendChild(charElement);
      });
      return content
    }
    const WELCOME = splitText('WELCOME')

    gsap.fromTo(WELCOME.children, {
      opacity: 0,
      y: 100,
      stagger: 0.1,
      ease: 'power4.out',
      repeat: 1,
    }, {
      opacity: 1,
      y: 100,
      stagger: .5,
      duration: 2,
      ease: 'power4.out',
    })
    gsap.to(WELCOME.children, {
      opacity: 0,
      delay: 4.5,
      y: 100,
      stagger: 0.1,
      ease: 'power4.out',
      repeat: 0
    })
    gsap.to(WELCOME.children, {
      delay: 5,
      display: 'none'
    })




    gsap.fromTo(mainDiv.children, {
      opacity: 0,
      stagger: .001,
      ease: 'power1.out',
    }, {
      opacity: 1,
      stagger: .001,
      duration: 2,
      delay: 5,
      ease: 'power1.out',
    })
  }, [])


  return (
    <div className="overflow-y-hidden relative flex justify-center items-center ">
      <div id="WELCOME" className="sm:text-[10em] text-[5em] delay-5000 absolute z-[999] top-0 text-black  ">WELCOME</div>
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
    </div>

  )
}

export default App
