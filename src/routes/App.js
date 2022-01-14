import { Route, BrowserRouter, Switch } from "react-router-dom";
import MicBtn from "../components/MicBtn";
import "../styles/App.scss";

import usePersonalAssistance from "../utils/usePersonalAssistance";

import PulsaPage from "./PulsaPage";

function HomePage() {
  const dsa = usePersonalAssistance();

  console.log(JSON.stringify(dsa.text, null, 2), dsa.status);

  return (
    <div>
      <div>
        <div className="container">
          <MicBtn onClick={dsa.toggleAudio} />
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
