import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Button } from 'semantic-ui-react';

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">Simple React app to perform crud operations</h2>
        <div className="inline-buttons">
          <a className="btn-1" href="/Home" > <Button>Home</Button> </a>
          <a className="btn-1" href="/create" > <Button>Add new Data</Button> </a>
          <a className="btn-2" href="/read" > <Button>Display stored data</Button> </a>
          </div>
        <div>
          <Route exact path='/create' component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={Read} />
        </div>

        <Route path='/update' component={Update} />
      </div>
    </Router>
  );
}

export default App;
