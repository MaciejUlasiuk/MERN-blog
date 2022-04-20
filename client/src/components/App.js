import  {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import './App.css';

import Footer from "./Footer";
import Topmenu from "./Topmenu";
import Header from "./Header";
import Posts from "./Posts";
import Contact from "./Contact";
import Aboutme from "./Aboutme";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <>
    <Topmenu/>
    <Switch>
      <Route exact path="/">
    <Header/>
    </Route>
    <Route path="/posts">
    <Posts/>
    <Footer/>
    </Route>
    <Route path="/contact">
      <Contact/>
      <Footer/>
    </Route>
    <Route path="/Aboutme">
      <Aboutme/>
      <Footer/>
    </Route>
    
    
    
    </Switch>
    </>
    
    </Router>
  );
}

export default App;
