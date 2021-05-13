import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Games from "./containers/Games";
import Game from "./containers/Game";
import ChallengeContainer from "./containers/ChallengeContainer";
// import AnswerContainer from "./containers/AnswerContainer";
function App() {
  return (
    <div className="App">
      EMOTION ID
      <Router>
        
        <Switch>
          <Route exact path="/" component={Games} />
          <Route exact path="/games/:username" component={Game} />
          <Route exact path="/challenges/:id" component={ChallengeContainer} />
          <Route exact path="/challenge_answers" component={ChallengeContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
