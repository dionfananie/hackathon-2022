import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTimes } from "@fortawesome/free-solid-svg-icons";

import {
  bottomSheetBG,
  bottomSheetClose,
  bottomSheetContent,
  bottomSheetHeader,
  bottomSheetWrapper,
} from "./styles";

const BottomSheet = ({ display, children, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!display) {
      setTimeout(() => {
        setIsOpen(false);
      }, 400);
    } else {
      setIsOpen(true);
    }
  }, [display, setIsOpen]);

  return (
    isOpen && (
      <>
        <div className={bottomSheetBG(display)} />
        <div className={bottomSheetWrapper(display)}>
          <div className={bottomSheetHeader}>
            <button
              className={bottomSheetClose}
              type="button"
              onClick={onClose}
            >
              <FontAwesomeIcon icon={faTimes} color="gray" size="lg" />
            </button>
          </div>
          <div className={bottomSheetContent}>{children}</div>
        </div>
      </>
    )
  );
};

export default BottomSheet;
