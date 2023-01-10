import { useState } from "react";

// react-bootstrap
import { Container } from "react-bootstrap";

// Imported components
import MainIcon from "./mainIcon";
import AboutWindow from "./windows/about/aboutWindow";
import ProjectsWindow from "./windows/projects/projectsWindow";
import ContactWindow from "./windows/contactWindow";

// Imported assets
import user from "../../assets/icons/character-icon.png";
import projects from "../../assets/icons/folder-icon.png";
import mail from "../../assets/icons/mail-icon.png";

const Desktop = ({
  onNotification,
  onNewTab,
  onRemoveTab,
  onMinimizeWindow,
  tabs,
  onOrderChange,
  order,
}) => {
  const [showAboutWindow, setShowAboutWindow] = useState(false);
  const [showProjectsWindow, setShowProjectsWindow] = useState(false);
  const [showContactWindow, setShowContactWindow] = useState(false);

  return (
    <main className="desktop flex-fill pt-5 position-relative">
      <Container fluid>
        <MainIcon
          img={user}
          title="About me"
          onOpenWindow={() => {
            setShowAboutWindow(true);
            onOrderChange("about");
            onNewTab(user, "about");
          }}
        />
        <MainIcon
          img={projects}
          title="Projects"
          onOpenWindow={() => {
            setShowProjectsWindow(true);
            onOrderChange("projects");
            onNewTab(projects, "projects");
          }}
        />
        <MainIcon
          img={mail}
          title="Contact me"
          onOpenWindow={() => {
            setShowContactWindow(true);
            onOrderChange("contact");
            onNewTab(mail, "contact");
          }}
        />
      </Container>
      {showAboutWindow ? (
        <AboutWindow
          order={order.about}
          onOrderChange={onOrderChange}
          onCloseWindow={() => {
            setShowAboutWindow(false);
            onRemoveTab("about");
          }}
          onMinimizeWindow={onMinimizeWindow}
          isMinimized={
            tabs.find((tab) => tab.name === "about")
              ? tabs.find((tab) => tab.name === "about").minimized
              : false
          }
        />
      ) : (
        ""
      )}
      {showProjectsWindow ? (
        <ProjectsWindow
          order={order.projects}
          onOrderChange={onOrderChange}
          onCloseWindow={() => {
            setShowProjectsWindow(false);
            onRemoveTab("projects");
          }}
          onMinimizeWindow={onMinimizeWindow}
          isMinimized={
            tabs.find((tab) => tab.name === "projects")
              ? tabs.find((tab) => tab.name === "projects").minimized
              : false
          }
        />
      ) : (
        ""
      )}
      {showContactWindow ? (
        <ContactWindow
          order={order.contact}
          onOrderChange={onOrderChange}
          onNotification={onNotification}
          onCloseWindow={() => {
            setShowContactWindow(false);
            onRemoveTab("contact");
          }}
          onMinimizeWindow={onMinimizeWindow}
          isMinimized={
            tabs.find((tab) => tab.name === "contact")
              ? tabs.find((tab) => tab.name === "contact").minimized
              : false
          }
        />
      ) : (
        ""
      )}
    </main>
  );
};

export default Desktop;
