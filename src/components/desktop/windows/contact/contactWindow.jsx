import { useState, useRef } from "react";

// react-draggable
import Draggable from "react-draggable";

// react-bootstrap
import { Button, Fade, Container, Row, Col } from "react-bootstrap";

// Emailjs
import { send } from "emailjs-com";

// Imported components
import WindowHeader from "../windowHeader";
import Notification from "./notification";

// Imported assets
import mail from "../../../../assets/icons/mail-icon.png";
import linkedin from "../../../../assets/icons/linkedin.svg";
import github from "../../../../assets/icons/github.svg";

const ContactWindow = ({
  order,
  onOrderChange,
  onCloseWindow,
  onMinimizeWindow,
  isMinimized,
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showNotifi, setShowNotifi] = useState(false);
  const [notification, setNotification] = useState("");
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Aya Saeed",
    message: "",
    reply_to: "",
  });
  const nodeRef = useRef(null);

  const handleClosingNotifi = () => {
    setShowNotifi(false);
  };

  const handleShowingNotifi = (msg) => {
    setNotification(msg);
    setShowNotifi(true);
  };

  const handleSizeToggle = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleShowingNotifi("Checking email status...");
    send("service_r5zuzh8", "template_6wlf969", toSend, "Tl2nqjC1RobUsFA7u")
      .then(() => {
        handleShowingNotifi("Email was sent successfully!");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        handleShowingNotifi("Failed to send email.");
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".handle"
      defaultPosition={{ x: 0, y: -250 }}
      bounds="body"
      disabled={isFullScreen ? true : false}
      onStart={() => {
        if (order === 3) return;
        onOrderChange("contact");
      }}
    >
      <Fade in={!isMinimized}>
        <div
          ref={nodeRef}
          className={`window ${isFullScreen ? "full-size" : "original-size"} ${
            isMinimized ? "minimized" : ""
          } mail p-2 d-flex flex-column gap-2 gray-bg position-absolute order-${order}`}
          onClick={() => {
            if (order === 3) return;
            onOrderChange("contact");
          }}
        >
          <WindowHeader
            title="Contact me"
            img={mail}
            onSizeToggle={handleSizeToggle}
            isFullScreen={isFullScreen}
            onCloseWindow={onCloseWindow}
            onMinimizeWindow={() => onMinimizeWindow("contact", true)}
          />
          <main className="window-main overflow-auto flex-fill bg-white">
            <Container
              fluid
              className="pb-4 pb-md-5 pt-3 pt-md-4 overflowY-scroll h-100 d-flex flex-column justify-content-between gap-4"
            >
              <form onSubmit={handleSubmit} className="holder">
                <Row className="m-0">
                  <Col
                    className={`${
                      isFullScreen
                        ? "col-12 col-md-6 px-0 pe-md-2"
                        : "col-12 px-0 "
                    } mb-4`}
                  >
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Your name"
                      value={toSend.from_name}
                      onChange={handleChange}
                      aria-label="Enter your name"
                      className="d-block w-100 border-0 border-bottom p-2"
                      required
                    />
                  </Col>
                  <Col
                    className={`${
                      isFullScreen
                        ? "col-12 col-md-6 px-0 ps-md-2"
                        : "col-12 px-0 "
                    } mb-4`}
                  >
                    <input
                      type="email"
                      name="reply_to"
                      placeholder="Your email"
                      value={toSend.reply_to}
                      onChange={handleChange}
                      aria-label="Enter your email"
                      className="d-block w-100 border-0 border-bottom p-2"
                      required
                    />
                  </Col>
                </Row>
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder="Your message"
                  value={toSend.message}
                  onChange={handleChange}
                  aria-label="Enter your message"
                  className="d-block w-100 border-0 border-bottom mb-4 p-2"
                  required
                ></textarea>
                <Button
                  type="submit"
                  className="submit-btn d-block rounded-0 border-0"
                >
                  Send
                </Button>
              </form>
              <ul className="social-links list-unstyled m-0 d-flex justify-content-center gap-3">
                <li>
                  <a
                    href="https://github.com/Aya-Saeed261"
                    aria-label="Github account"
                    className="nav-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={github}
                      alt="Github account"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/aya-saeed261/"
                    aria-label="LinkedIn account"
                    className="nav-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={linkedin}
                      alt="LinkedIn account"
                      className="img-fluid"
                    />
                  </a>
                </li>
              </ul>
            </Container>
          </main>
          <Notification
            onClose={handleClosingNotifi}
            show={showNotifi}
            msg={notification}
          />
        </div>
      </Fade>
    </Draggable>
  );
};

export default ContactWindow;
