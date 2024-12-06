import { useState, useRef } from "react";

// react-draggable
import Draggable from "react-draggable";

// react-bootstrap
import { Tab, Tabs, Fade, Container } from "react-bootstrap";

// Imported components
import WindowHeader from "../windowHeader";
import Interests from "./interests";
import Skills from "./skills";
import Story from "./story";

// Imported assets
import about from "../../../../assets/icons/character-icon.png";

const AboutWindow = ({
  order,
  onOrderChange,
  onCloseWindow,
  onMinimizeWindow,
  isMinimized,
}) => {
  const [key, setKey] = useState("skills");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const nodeRef = useRef(null);

  const handleSizeToggle = () => {
    setIsFullScreen(!isFullScreen);
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
        onOrderChange("about");
      }}
    >
      <Fade in={!isMinimized}>
        <div
          ref={nodeRef}
          className={`window ${isFullScreen ? "full-size" : "original-size"} ${
            isMinimized ? "minimized" : ""
          } about p-2 d-flex flex-column gap-2 gray-bg position-absolute order-${order}`}
          onClick={() => {
            if (order === 3) return;
            onOrderChange("about");
          }}
        >
          <WindowHeader
            title="About me"
            img={about}
            onSizeToggle={handleSizeToggle}
            isFullScreen={isFullScreen}
            onCloseWindow={onCloseWindow}
            onMinimizeWindow={() => onMinimizeWindow("about", true)}
          />
          <main className="window-main overflow-y-auto flex-fill bg-white py-3">
            <Container fluid className="holder">
              <Tabs
                id="controlled-tab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 gray-bg"
              >
                <Tab eventKey="story" title="About">
                  <Story />
                </Tab>
                <Tab eventKey="skills" title="Skills">
                  <Skills />
                </Tab>
                <Tab eventKey="interests" title="Interests">
                  <Interests />
                </Tab>
              </Tabs>
            </Container>
          </main>
        </div>
      </Fade>
    </Draggable>
  );
};

export default AboutWindow;
