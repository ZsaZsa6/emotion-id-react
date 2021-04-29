import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Games from "./containers/Games";
function App() {
  return (
    <div className="App">
      EMOTION ID
      <Router>
        <Switch>
          <Route exact path="/" component={Games} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
