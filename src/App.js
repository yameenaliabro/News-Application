import logo from './logo.svg';
import './App.css';
import News from './components/newsapplication/news';
import Navbar from './components/navbar/Navbar';
import Theme from './Ui/Theme';
import Carousel from './components/Carousel/Carousel';
function App() {
  return (
    <div className="App">
      <Theme>
        <Navbar />
        <News />
      </Theme>
    </div>
  );
}

export default App;
