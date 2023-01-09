import React from "react";

// react-bootstrap
import { Toast, ToastContainer, Button } from "react-bootstrap";

// Imported assets
import close from "../assets/icons/close-icon.svg";

const Notification = ({ onClose, show, msg }) => {
  return (
    <ToastContainer position="middle-center" className="notification">
      <Toast
        show={show}
        onClose={onClose}
        className="rounded-0 gray-bg shadow-sm"
        delay={3000}
        autohide={msg !== "Checking email status..." ? true : false}
      >
        <Toast.Body>
          <div className="d-flex align-items-center justify-content-between gap-2">
            <p className="mb-0">{msg}</p>
            {msg !== "Checking email status..." ? (
              <Button
                className="bg-transparent border-0 p-0"
                aria-label="Close notification"
                onClick={onClose}
              >
                <img src={close} alt="" className="close-icon img-fluid" />
              </Button>
            ) : (
              ""
            )}
          </div>
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default Notification;
