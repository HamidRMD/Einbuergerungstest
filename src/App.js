import './App.css';
import AnfangAnimation from './Components/Animation/AnfangAnimation';
import FragenBox from './Components/Testseite/FragenBox';
import Logo from './Components/Testseite/Logo';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Fragen from "./310_Fragen/FragenSeite/FragenSeite";
import Info from "./310_Fragen/InfoSeite/InfoSeite";
import Start from "./310_Fragen/StartSeite/StartSeite";

function App() {
  return (
    <div className="App">
      <FragenBox />
      <Logo />

      <BrowserRouter>
        <Switch>
            <Route path={"/Fragen"} component={Fragen}></Route>
                <Route path={"/Info"} component={Info}></Route>
                <Route path={"/"} component={Start}></Route>
        </Switch>
      </BrowserRouter>

    </div>

  );
}

export default App;
