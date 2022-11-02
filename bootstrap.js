// defaults for Bootstrap
import './resources/App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CarInfoSection } from './components/CarInfoSection';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
// JQuery is required for Bootstrap JavaScript such as dropdown bars (this won't yield an error either)

function App() {
  return (
    <div className="App">
      <Navbar />
      <CarInfoSection />
      <Footer />
    </div>
  );
}

export default App;
