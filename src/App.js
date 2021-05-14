import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Games from "./containers/Games";
import Game from "./containers/Game";
import ChallengeContainer from "./containers/ChallengeContainer";
// import FlashMessageContainer from "./containers/FlashMessageContainer";



function App() {
  return (
    <div className="App">
      EMOTION ID
      <Router>
        
        <Switch>
          <Route exact path="/" component={Games} />
          <Route exact path="/games/:username" component={Game} />
          <Route exact path="/games/:username/challenges/:id" component={ChallengeContainer} />
          <Route exact path="/games/:username/challenges/:id/challenge_answers" component={ChallengeContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
