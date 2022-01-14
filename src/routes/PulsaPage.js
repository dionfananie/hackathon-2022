import { useEffect } from "react";
import usePersonalAssistance from "../utils/usePersonalAssistance";

const PulsaPage = () => {
  const { speakToUser, startPA, stopPA } = usePersonalAssistance();

  useEffect(() => {
    speakToUser(
      "Kita ada beberapa pilihan nominal, 15 ribu, 25 ribu, 30 ribu, 40 ribu, 50 ribu dan 75 ribu?",
      startPA
    );

    return () => {
      stopPA();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="container-pulsa" />;
};

export default PulsaPage;
