import "../styles/App.scss";
import Header from "../components/Header";

import usePersonalAssistance from "../utils/usePersonalAssistance";

function App() {
  const dsa = usePersonalAssistance();

  console.log(JSON.stringify(dsa.text, null, 2), dsa.status);

  return (
    <div className="container">
      <Header />
      <button onClick={dsa.toggleAudio}>sip</button>
    </div>
  );
}

export default App;
