import Header from './components/Header';
import WelcomePage from './pages/WelcomePage';
import SuggestCity from './components/SuggestCity';
import BestPlaces from './pages/BestPlaces';
import EstateDemo from './pages/EstateDemo';
import GreenVilla from './components/GreenVilla';
import SpecialDeal from './pages/SpecialDeal';
import Agents from './pages/Agents';
import Clients from './pages/Clients';
import SubmitForm from './pages/SubmitForm';
import Blogs from './pages/Blogs';
import Footer from './pages/Footer';

function App() {
  return (
    <div>
      <Header/>
      <WelcomePage/>
      <SuggestCity/>
      <BestPlaces/>
      <EstateDemo/>
      <GreenVilla/>
      <SpecialDeal/>
      <Agents/>
      <Clients/>
      <SubmitForm/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
