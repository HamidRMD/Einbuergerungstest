import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Fragen from "./Components/310_Fragen/FragenSeite/FragenSeite";
import Zurück from "./Components/310_Fragen/VorFragenSeite/VorFragenSeite"
import Info from "./Components/310_Fragen/InfoSeite/InfoSeite";
import Bewertung from "./Components/Bewertung/BewertungsKriterien";
import Start from "./Components/StartSeite/StartSeite";
import Login from "./Components/LoginSeite/Login";
import Test from "./Components/Testseite/TestSeite";
import Signup from "./Components/Registrierung/Signup";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch> 
                <Route path={"/Signup"} component={Signup}></Route>
                <Route path={"/Test"} component={Test}></Route>
                <Route path={"/Login"} component={Login}></Route>
                <Route path={"/Zurück"} component={Zurück}></Route>
                <Route path={"/Fragen"} component={Fragen}></Route>
                <Route path={"/Info"} component={Info}></Route>
                <Route path={"/Bewertung"} component={Bewertung}></Route>
                <Route path={"/"} component={Start}></Route>
        </Switch>
      </BrowserRouter>
      



    </div>

  );
}

export default App;
