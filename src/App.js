import './App.css';
import AnfangAnimation from './Components/Animation/AnfangAnimation';
import FragenBox from './Components/Testseite/FragenBox';
import Logo from './Components/Testseite/Logo';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "./Components/310Fragen/pages/home/Home";
import QuestionsPage from "./Components/310Fragen/pages/Questions/Questions";
import InfoPage from "./Components/310Fragen/pages/infoPage/InfoPage";

function App() {
  return (
    <div className="App">
      <FragenBox />
      <Logo />

      <BrowserRouter>
        <Switch>
          <Route path={"/questions"} component={QuestionsPage} />
          <Route path={"/info"} component={InfoPage} />
          <Route path={"/"} component={Home} />
        </Switch>
      </BrowserRouter>

    </div>

  );
}

export default App;
