import './App.css';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import Nav from './components/Nav'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Forms from './components/Forms'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/contact-us" component={ContactUs}/>
          <Route path="/forms" component={Forms}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
