import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import ErrorPage from './Pages/ErrorPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';

function App() {

  const theme = {
    colors: {
      primary: '#1861a1',
      secondary: 'red',
      black: 'black',
      white: 'white',
      boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    },
    media: {
      mobile: '720px',
      tab: '1150px',
      large: '1250px',
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/singleProduct/:id' element={<SingleProduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
