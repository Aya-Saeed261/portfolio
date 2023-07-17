import { useState, useRef } from "react";

// react-draggable
import Draggable from "react-draggable";

// react-bootstrap
import { Button, Fade, Container, Row, Col } from "react-bootstrap";

// Emailjs
import { send } from "emailjs-com";

// Components
import WindowHeader from "../windowHeader";
import Notification from "./notification";

// Assets
import mail from "../../../../assets/icons/mail-icon.png";
import linkedin from "../../../../assets/icons/linkedin.svg";
import github from "../../../../assets/skills/github.svg";

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
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailOnBlurError, setEmailOnBlurError] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgError, setMsgError] = useState("");
  const nodeRef = useRef(null);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
    if (nameError || emailError || msgError) return;
    if (!name || !email || !msg) {
      if (!name) setNameError("Name is required");
      if (!email) setEmailError("Email is required");
      if (!msg) setMsgError("Message is required");
      return;
    }
    const userForm = {
      from_name: name.trim(),
      to_name: "Aya Saeed",
      message: msg.trim(),
      reply_to: email,
    };
    handleShowingNotifi("Checking email status...");
    send("service_r5zuzh8", "template_6wlf969", userForm, "Tl2nqjC1RobUsFA7u")
      .then(() => {
        handleShowingNotifi("Email was sent successfully!");
        setName("");
        setEmail("");
        setMsg("");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        handleShowingNotifi("Failed to send email.");
      });
  };

  const handleNameChange = (e) => {
    const nameRegex = /^[A-Za-z\s]*$/;
    setName(e.target.value);
    if (!e.target.value) {
      setNameError("Name is required");
    } else if (!/^(?! )/.test(e.target.value)) {
      setNameError("Name must start with a letter");
    } else if (!nameRegex.test(e.target.value)) {
      setNameError("Name should contain letters and spaces only");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value) {
      setEmailError("Email is required");
    } else if (emailOnBlurError && !emailRegex.test(e.target.value)) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
      setEmailOnBlurError(false);
    }
  };

  const handleEmailValidation = (e) => {
    if (!emailRegex.test(e.target.value)) {
      setEmailError("Please enter a valid email");
      setEmailOnBlurError(true);
    } else {
      setEmailError("");
      setEmailOnBlurError(false);
    }
  };

  const handleMsgChange = (e) => {
    setMsg(e.target.value);
    if (e.target.value.trim().length === 0) {
      setMsgError("Message is required");
    } else {
      setMsgError("");
    }
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
              className="pb-4 pt-3 pt-md-4 overflow-auto h-100 d-flex flex-column justify-content-between gap-4"
            >
              <form onSubmit={handleSubmit} noValidate className="holder">
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
                      value={name}
                      onChange={handleNameChange}
                      aria-label="Enter your name"
                      className={`d-block w-100 border-0 border-bottom p-2 ${
                        nameError ? "is-invalid border-danger" : ""
                      }`}
                      required
                    />
                    <p className="invalid-feedback mb-0">{nameError}</p>
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
                      value={email}
                      onChange={handleEmailChange}
                      onBlur={handleEmailValidation}
                      aria-label="Enter your email"
                      className={`d-block w-100 border-0 border-bottom p-2 ${
                        emailError ? "is-invalid border-danger" : ""
                      }`}
                      required
                    />
                    <p className="invalid-feedback mb-0">{emailError}</p>
                  </Col>
                </Row>
                <div className="mb-4">
                  <textarea
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="Your message"
                    value={msg}
                    onChange={handleMsgChange}
                    aria-label="Enter your message"
                    className={`d-block w-100 border-0 border-bottom p-2 ${
                      msgError ? "is-invalid border-danger" : ""
                    }`}
                    required
                  ></textarea>
                  <p className="invalid-feedback mb-0">{msgError}</p>
                </div>
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
                    href="https://www.linkedin.com/in/ayamohamedsaeed/"
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
