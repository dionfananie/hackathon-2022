import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { loadingIcon, micFloatingBtn, micIcon } from "./styles";

const MicBtn = ({ active, loading, onClick }) => {
  const handleClick = () => {
    if (!loading) onClick();
  };

  return (
    <div className={micFloatingBtn(active)} onClick={handleClick}>
      {loading ? (
        <div className={loadingIcon} />
      ) : (
        <div className={micIcon(active)}>
          <FontAwesomeIcon icon={faMicrophone} color="white" size="lg" />
        </div>
      )}
    </div>
  );
};

export default MicBtn;
