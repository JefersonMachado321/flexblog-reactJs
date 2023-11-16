import Container from './Components/Container';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Newsletter from './Components/Newsletter';
import Preco from './Components/Preco';
import Produtos from './Components/Produtos';
import Qualidade from './Components/Qualidade';
import Sobre from './Components/Sobre';
import SuperInfo from './Components/SuperInfo';
import TextoIntroducao from './Components/TextoIntrodu';

function App() {
  return (
    <>
      <SuperInfo />
      <Header />
      <Container>
        <TextoIntroducao />
        <Sobre />
        <Produtos />
        <Preco />
        <Qualidade />
        <Newsletter />
      </Container>
      <Footer />
    </>
  );
}

export default App;
