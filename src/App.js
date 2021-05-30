import './App.css';
import Flexdirection from './components/Flexdirection';
import {BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Container from './components/Container';
import JustifyContent from './components/JustifyContent';
import AlignItems from './components/AlignItems'
function App() {
  return (
    <Router>
     <h1 style={{textAlign:"center"}}>Choose property</h1>
     <Container/>
     <Switch>
     <Route exact path='/flexdirection' component={Flexdirection}/>
     <Route exact path='/justifycontent' component={JustifyContent}/>
     <Route exact path='/alignitems' component={AlignItems}/>
     </Switch>
    </Router>
  );
}

export default App;
