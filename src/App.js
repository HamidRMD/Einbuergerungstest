import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Fragen from "./Components/310_Fragen/FragenSeite/FragenSeite";
import Info from "./Components/310_Fragen/InfoSeite/InfoSeite";
import Bewertung from "./Components/Bewertung/BewertungsKriterien";
import Start from "./Components/StartSeite/StartSeite";
import Test from "./Components/Testseite/TestSeite";
import Ergebnis from "./Components/Testseite/Ergebnis"
//<Route path={"/Login"} component={Login}></Route>
//<Route path={"/Signup"} component={Signup}></Route>
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch> 
                <Route path={"/Test"} component={Test}></Route>
                <Route path={"/Fragen"} component={Fragen}></Route>
                <Route path={"/Ergebnis"} component={Ergebnis}></Route>
                <Route path={"/Info"} component={Info}></Route>
                <Route path={"/Bewertung"} component={Bewertung}></Route>
                <Route path={"/"} component={Start}></Route>
        </Switch>
      </BrowserRouter>
      



    </div>

  );
}

export default App;
