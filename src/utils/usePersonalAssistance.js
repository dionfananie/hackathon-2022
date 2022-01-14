import { useState, useEffect, useRef } from "react";
import textProcessing from "./textProcessing";

const STATUS_VALUE = {
  START: "START",
  LISTENING: "LISTENING",
  DONE_LISTENING: "DONE_LISTENING",
  STOP: "STOP",
};

function usePersonalAssistance() {
  const [status, setStatus] = useState("");
  const [text, setText] = useState({ raw: "", result: "" });
  const recognitionRef = useRef(null);

  const stopPA = () => {
    recognitionRef.current.stop();
    setStatus(STATUS_VALUE.STOP);
    setText({ raw: "", result: "" });
  };

  const startPA = () => {
    recognitionRef.current.start();
    setStatus(STATUS_VALUE.START);
  };

  const speakToUser = (text, callback) => {
    const utterThis = new SpeechSynthesisUtterance();
    utterThis.lang = "id";
    utterThis.text = text;

    window.speechSynthesis.speak(utterThis);
    utterThis.onend = callback;
  };

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (typeof SpeechRecognition === "undefined")
      alert("Browser does not support Speech API.");
    else {
      const recognition = new SpeechRecognition();

      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "id";

      recognitionRef.current = recognition;

      recognition.onresult = (event) => {
        setStatus(STATUS_VALUE.LISTENING);

        const last = event.results.length - 1;
        const res = event.results[last];
        const text = res[0].transcript;

        if (res.isFinal) {
          setStatus(STATUS_VALUE.DONE_LISTENING);

          const response = textProcessing(text);
          setText({ raw: text, result: response });
        }
      };
    }

    return () => {
      if (recognitionRef.current) stopPA();
    };
  }, []);

  console.log(status);

  return { status, text, startPA, speakToUser, stopPA };
}

export default usePersonalAssistance;
