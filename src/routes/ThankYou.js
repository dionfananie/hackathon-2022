import { useEffect } from "react";
import usePersonalAssistance from "../utils/usePersonalAssistance";

const ThankYou = () => {
  const { speakToUser, stopPA } = usePersonalAssistance();

  useEffect(() => {
    speakToUser("Terima Kasih, sudah berbelanja di Tokopedia.", () => {
      window.location.assign("/");
    });

    return () => {
      stopPA();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="thank-you" />;
};

export default ThankYou;
