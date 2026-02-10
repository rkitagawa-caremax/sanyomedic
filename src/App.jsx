import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Flow from './components/Flow'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Services />
                <Products />
                <Flow />
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default App
