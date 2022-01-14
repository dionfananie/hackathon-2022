import { useEffect } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import MicBtn from "../components/MicBtn";
import "../styles/App.scss";

import usePersonalAssistance from "../utils/usePersonalAssistance";

import PulsaPage from "./PulsaPage";

function HomePage() {
  const { startPA, stopPA } = usePersonalAssistance();

  useEffect(() => {
    return () => {
      stopPA();
    };
  }, []);

  return (
    <div>
      <div>
        <div className="container">
          <MicBtn onClick={startPA} />
        </div>
        <div className="navBottom"></div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/pulsa-page" component={PulsaPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
