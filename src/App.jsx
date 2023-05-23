import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import FormVideo from './components/registro/FormVideo'
import FormCategoria from './components/registro/FormCategoria'
import Page404 from './components/Page404'
import { CategoriaProvider } from './components/Context/CategoriaProvider'

function App() {

    return (
        <Router>
            <Header />
            <main>
                <CategoriaProvider>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/nuevo-video' element={<FormVideo />} />
                        <Route path='/nueva-categoria' element={<FormCategoria />} />
                        <Route path='/*' element={<Page404 />} />
                    </Routes>
                </CategoriaProvider>
            </main>
            <Footer />
        </Router>
    )
}

export default App
