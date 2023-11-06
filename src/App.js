import './styles/reset.css';
import {
  Header,
  Footer,
  QuickMenu,
  Chart,
  Ranking,
  Browse,
} from './components';
import { Container } from './components/Header/styled';

function App() {
  return (
    <Container>
      <Header />
      <Chart />
      <QuickMenu />
      <Ranking />
      <Browse />
      <Footer />
    </Container>
  );
}

export default App;
