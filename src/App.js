import './App.css';

import Flexdirection from './components/ParentContainer/Flexdirection';
import {BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Container from './components/ParentContainer/Container';
import JustifyContent from './components/ParentContainer/JustifyContent';
import AlignItems from './components/ParentContainer/AlignItems'
import FlexWrap from './components/ParentContainer/FlexWrap';

function App() {
  return (
    <Router>
     <h1 style={{textAlign:"center"}}>Choose property</h1>
     
     <Container/>
     <Switch>
     <Route exact path='/flexdirection' component={Flexdirection}/>
     <Route exact path='/justifycontent' component={JustifyContent}/>
     <Route exact path='/alignitems' component={AlignItems}/>
     <Route exact path='/flexwrap' component={FlexWrap}/>
     
     
     </Switch>
    </Router>
  );
}

export default App;
