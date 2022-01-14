import { useEffect } from "react";
import usePersonalAssistance from "../utils/usePersonalAssistance";

const CheckoutPage = () => {
  const { speakToUser, startPA, stopPA } = usePersonalAssistance();

  useEffect(() => {
    speakToUser(
      "Saat ini, kamu menggunakan pembayaran 'GoPay', apakah kamu ingin mengganti metode pembayaran sekarang?",
      startPA
    );

    return () => {
      stopPA();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="container-payment" />;
};

export default CheckoutPage;
