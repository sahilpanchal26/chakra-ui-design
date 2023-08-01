import './App.css';
// import { Container, Flex } from '@chakra-ui/react';
// import Details from './Components/Details';
// import Cart from './Components/Cart';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import CartPage from './pages/CartPage';
import NavBar from './Components/Navigation/NavBar';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='/post' index element={<PostPage/>}/>
        <Route path='/cart' index element={<CartPage/>}/>
      </Routes>
    </Router>
    // <Container maxWidth="container.lg" padding="10">
    //   <Flex h={{base:"auto",md:"100vh"}} py={[0,10,20]} direction={{base:"column-reverse",md:"row"}}>
    //     <Details/>
    //     <Cart/>
    //   </Flex>
    // </Container>
  );
}

export default App;
