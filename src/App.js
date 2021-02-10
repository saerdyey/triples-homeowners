import './App.css';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import Nav from './components/Nav'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/contact-us" component={ContactUs}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
