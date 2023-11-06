import './styles/reset.css';
import { Text, Input, Button, StyledCard, Daily, QuickMenu,ChartItem, Chart,Ranking } from './components';
import { Header, Stock, Footer } from './components';

function App() {
  return (
    <>
      <Chart></Chart>
      <QuickMenu></QuickMenu>
      <Ranking/>
      <Header />
      <Stock />
      <Footer />
    </>
  );
}

export default App;
