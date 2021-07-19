import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Games from "./containers/Games";
import Game from "./containers/Game";
import ChallengeContainer from "./containers/ChallengeContainer";
import ChallengeAnswerContainer from "./containers/ChallengeAnswerContainer";




function App() {
  return (
    <div className="App">
      <div className="bg-gray-500 font-bold text-center text-grey-darkest text-8xl md:text-4xl px-10 mb-0 sm:mb-0">EmotionID</div>
      <Router>
        
        <Switch>
          <Route exact path="/" component={Games} />
          <Route exact path="/games/:username" component={Game} />
          <Route exact path="/games/:username/challenges/:id" component={ChallengeContainer} />
          <Route exact path="/games/:username/challenge_answers" component={ChallengeContainer} />
          <Route exact path="/games/:username/challenge_answers/:id" component={ChallengeAnswerContainer} />
        </Switch>
      </Router>
      <div className="bg-gray-100 text-left text-blue-400">designed by ZsaZsa</div>
    </div>
  );
}

export default App;
