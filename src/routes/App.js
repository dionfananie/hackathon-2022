import "../styles/App.scss";

import usePersonalAssistance from "../utils/usePersonalAssistance";

function App() {
  const dsa = usePersonalAssistance();

  console.log(JSON.stringify(dsa.text, null, 2), dsa.status);

  return (
    <div>

    <div className="container">
      <button onClick={dsa.toggleAudio}>sip</button>
    </div>
      <div className='navBottom'></div>
    </div>
  );
}

export default App;
