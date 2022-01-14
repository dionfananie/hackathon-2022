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

          // ===========
          // const txtToSpeach = new SpeechSynthesisUtterance(
          //   "kita hanya memiliki pulsa yang 20 ribu 25 ribu dan 30 ribu"
          // );
          // txtToSpeach.lang = "id";
          // speechSynthesis.speak(txtToSpeach);
          // ==========

          const response = textProcessing(text);
          setText({ raw: text, result: response });
        }
      };
    }

    return () => {
      if (recognitionRef.current) recognitionRef.current.stop();
    };
  }, []);

  const toggleAudio = () => {
    if (![STATUS_VALUE.STOP, ""].includes(status)) {
      recognitionRef.current.stop();
      setStatus(STATUS_VALUE.STOP);
      setText({ raw: "", result: "" });
    } else {
      recognitionRef.current.start();
      setStatus(STATUS_VALUE.START);
    }
  };

  console.log(status);

  return { status, text, toggleAudio };
}

export default usePersonalAssistance;
