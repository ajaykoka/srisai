import Footer from "./components/Footer";
import Header from "./components/Header";

import { Container } from "react-bootstrap";
import './bootstrap.min.css'
import HomeScreen from "./screens/HomeScreen";
import Carouseli from "./components/Carouseli";
import ProductScreen from "./screens/ProductScreen";




function App() {
  return (
    <div>
      <Header />
      <main>
        <Container>
        <HomeScreen />
        </Container>
      </main>
      <Carouseli />
      <ProductScreen />
      <Footer />
    </div>
  );
}

export default App;
