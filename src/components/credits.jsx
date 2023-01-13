// react-bootstrap
import { Modal } from "react-bootstrap";

const Credits = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose} centered className="credits-modal">
      <Modal.Header closeButton className="rounded-0 py-1 px-3">
        <Modal.Title>Credits</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="heart"></div>
        <div>
          <p>
            <a
              href="https://webflow.com/made-in-webflow/website/Retro-Desktop"
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              Design
            </a>{" "}
            by KC Katalbas
          </p>
          <p>
            Icons:{" "}
            <a
              href="https://www.flaticon.com/"
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              flaticon
            </a>
            ,{" "}
            <a
              href="https://iconscout.com/"
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              IconScout
            </a>
            ,{" "}
            <a
              href="https://www.streamlinehq.com/icons/pixel"
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              Streamline
            </a>
          </p>
          <p className="mb-0">
            <a
              href="https://codepen.io/zerospree/pen/Vwvqbw"
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              Pulsating heart animation
            </a>{" "}
            by Codrin Pavel
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Credits;
