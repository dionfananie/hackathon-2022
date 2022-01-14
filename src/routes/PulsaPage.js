import { useEffect } from "react";
import usePersonalAssistance from "../utils/usePersonalAssistance";

const PulsaPage = () => {
  const { speakToUser } = usePersonalAssistance();

  useEffect(() => {
    speakToUser("Kita ada beberapa pilihan nominal, mau pilih yang mana?");
  }, [speakToUser]);

  return <div className="container-pulsa" />;
};

export default PulsaPage;
