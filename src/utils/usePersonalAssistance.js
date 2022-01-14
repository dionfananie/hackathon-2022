import { useState, useEffect, useRef } from "react";
import textProcessing from "./textProcessing";

const STATUS_VALUE = {
  START: "START",
  PROCESSESING: "PROCESSESING",
  STOP: "STOP",
};

function usePersonalAssistance() {
  const [status, setStatus] = useState("");
  const [text, setText] = useState({ raw: "", result: "" });
  const recognitionRef = useRef(null);

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
      recognition.muted = true;

      recognitionRef.current = recognition;

      recognition.onresult = (event) => {
        const last = event.results.length - 1;
        const res = event.results[last];
        const text = res[0].transcript;

        if (res.isFinal) {
          setStatus(STATUS_VALUE.PROCESSESING);

          const response = textProcessing(text);
          setText({ raw: text, result: response });
        }
      };
    }
  }, []);

  const toggleAudio = () => {
    if (status === STATUS_VALUE.PROCESSESING || status === STATUS_VALUE.START) {
      recognitionRef.current.stop();
      setStatus(STATUS_VALUE.STOP);
      setText({ raw: "", result: "" });
    } else {
      recognitionRef.current.start();
      setStatus(STATUS_VALUE.START);
    }
  };

  return { status, text, toggleAudio };
}

export default usePersonalAssistance;
