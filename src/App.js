import './styles/reset.css';
import {
  Header,
  Footer,
  QuickMenu,
  Chart,
  Ranking,
  Browse,
} from './components';

function App() {
  return (
    <>
      <Header />
      <Chart />
      <QuickMenu />
      <Ranking />
      <Browse />
      <Footer />
    </>
  );
}

export default App;
