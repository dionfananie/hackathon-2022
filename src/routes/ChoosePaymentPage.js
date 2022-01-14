import { useEffect } from "react";
import usePersonalAssistance from "../utils/usePersonalAssistance";

const PulsaPage = () => {
  const { speakToUser, startPA, stopPA } = usePersonalAssistance();

  useEffect(() => {
    speakToUser(
      "Kamu mau bayar pakai apa? Gopay Later, OVO Saldo Toko Pedia, BRI, One Klik, dan Mandir",
      startPA
    );

    return () => {
      stopPA();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="container-choose-payment" />;
};

export default PulsaPage;
