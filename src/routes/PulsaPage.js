import { useEffect } from "react";
import usePersonalAssistance from "../utils/usePersonalAssistance";

const PulsaPage = () => {
  const { speakToUser } = usePersonalAssistance();

  useEffect(() => {
    speakToUser(
      "Kita ada beberapa pilihan nominal, 15 ribu, 25 ribu, 30 ribu, 40 ribu, 50 ribu dan 70 ribu?"
    );
  }, [speakToUser]);

  return <div className="container-pulsa" />;
};

export default PulsaPage;
