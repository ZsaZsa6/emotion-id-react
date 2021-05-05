import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Games from "./containers/Games";
import Game from "./containers/Game";
function App() {
  return (
    <div className="App">
      EMOTION ID
      <Router>
        
        <Switch>
          <Route exact path="/" component={Games} />
          <Route exact path="/games/:username" component={Game} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
