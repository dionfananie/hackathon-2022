import { useEffect } from "react";
import usePersonalAssistance from "../utils/usePersonalAssistance";

const CheckoutPage = () => {
  const { speakToUser, startPA, stopPA } = usePersonalAssistance();

  useEffect(() => {
    speakToUser(
      "Kamu memilih layanan 'Telkomsel - Simpati' dengan harga 40 ribu dengan total harga 41 ribu 500, apakah kamu ingin melanjutkan ke halaman pembayaran?",
      startPA
    );

    return () => {
      stopPA();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="container-checkout" />;
};

export default CheckoutPage;
