import { useEffect } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import MicBtn from "../components/MicBtn";
import { STATUS_VALUE } from "../constants";
import "../styles/App.scss";

import usePersonalAssistance from "../utils/usePersonalAssistance";

import PulsaPage from "./PulsaPage";
import ThankYou from "./ThankYou";
import CheckoutPage from "./CheckoutPage";
import PaymentPage from "./PaymentPage";
import ChoosePaymentPage from "./ChoosePaymentPage";

function HomePage() {
  const { startPA, stopPA, status } = usePersonalAssistance();
  const isActive =
    status === STATUS_VALUE.START || status === STATUS_VALUE.LISTENING;

  useEffect(() => {
    return () => {
      stopPA();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        <div className="container">
          <MicBtn
            active={isActive}
            loading={status === STATUS_VALUE.DONE_LISTENING}
            onClick={isActive ? stopPA : startPA}
          />
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
        <Route path="/thank-you" component={ThankYou} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/payment" component={PaymentPage} />
        <Route path="/choose-payment" component={ChoosePaymentPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
