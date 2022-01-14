import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

const MicBtn = ({ onClick }) => {
  return (
    <div className="micFloatingBtn" onClick={onClick}>
      <FontAwesomeIcon icon={faMicrophone} color="white" size="lg" />
    </div>
  );
};

export default MicBtn;
