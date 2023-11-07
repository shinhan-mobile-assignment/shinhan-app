import {
  Header,
  Footer,
  QuickMenu,
  Chart,
  Ranking,
  Browse,
} from './components';
import { Container } from './components/Header/styled';
import './styles/reset.css';

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
