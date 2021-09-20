import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';



function App() {
  return (
    <div className="App">
      
     <Router>
     <Navbar />
    
       <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/products' exact component={Products} />
       <Route path='/about' exact component={About} />
       <Route path='/contact' exact component={Contact} />

      </Switch>
      </Router>
    </div>
  );
}

export default App;
