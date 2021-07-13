import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './utilities.css';
import './App.css';


const App = ()=> {
  
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
      </Switch>
      <navbar id="navbar" class="navbar">            
            <h1 class="logo">
                <span class="text-primary"><i class="fas fa-book-open"></i>Edge</span>Leger
            </h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </navbar>
        <Footer/>
    </main>
  );
}

export default App;
