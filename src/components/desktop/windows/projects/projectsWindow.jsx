import { useState, useRef } from "react";

// React-Bootstrap
import { Button, Fade, Container, Row, Col } from "react-bootstrap";

// React-draggable
import Draggable from "react-draggable";

// Imported assets
import projects from "../../../../assets/icons/folder-icon.png";
import project1 from "../../../../assets/projects/project-1.png";
import project2 from "../../../../assets/projects/project-2.png";
import project3 from "../../../../assets/projects/project-3.png";
import project4 from "../../../../assets/projects/project-4.png";
import project5 from "../../../../assets/projects/project-5.png";
import project6 from "../../../../assets/projects/project-6.png";

// Imported components
import WindowHeader from "../windowHeader";
import Project from "./project";

const ProjectsWindow = ({
  order,
  onOrderChange,
  onCloseWindow,
  onMinimizeWindow,
  isMinimized,
}) => {
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
        onOrderChange("projects");
      }}
    >
      <Fade in={!isMinimized}>
        <div
          ref={nodeRef}
          className={`window ${isFullScreen ? "full-size" : "original-size"} ${
            isMinimized ? "minimized" : ""
          } projects p-2 d-flex flex-column gap-2 gray-bg position-absolute order-${order}`}
          onClick={() => {
            if (order === 3) return;
            onOrderChange("projects");
          }}
        >
          <WindowHeader
            title="Projects"
            img={projects}
            onSizeToggle={handleSizeToggle}
            isFullScreen={isFullScreen}
            onCloseWindow={onCloseWindow}
            onMinimizeWindow={() => onMinimizeWindow("projects", true)}
          />
          <main className="window-main overflow-y-auto flex-fill bg-white pt-4 pb-5">
            <Container fluid className="pt-3">
              <Row className="m-0 mb-5 row-gap-5 justify-content-center">
                <Col
                  className={`${
                    isFullScreen
                      ? "col-12 col-md-6 col-lg-5 col-xl-4 px-0 px-md-3"
                      : "col-12 col-md-8 px-0"
                  }  `}
                >
                  <Project
                    img={project4}
                    name="Comfy"
                    codeLink="https://github.com/Comfy-team/comfy-frontend"
                    liveLink="https://comfy-frontend.vercel.app"
                    tags={[
                      "Ecommerce",
                      "React",
                      "Redux",
                      "Bootstrap",
                      "React-Bootstrap",
                      "Node.js",
                      "Express.js",
                      "MongoDB",
                    ]}
                  />
                </Col>
                <Col
                  className={`${
                    isFullScreen
                      ? "col-12 col-md-6 col-lg-5 col-xl-4 px-0 px-md-3"
                      : "col-12 col-md-8 px-0"
                  }  `}
                >
                  <Project
                    img={project5}
                    name="Sudoku for children"
                    codeLink="https://github.com/Aya-Saeed261/sudoku-for-children"
                    liveLink="https://aya-saeed261.github.io/sudoku-for-children/index.html"
                    tags={["Game", "HTML", "CSS", "JavaScript"]}
                  />
                </Col>
                <Col
                  className={`${
                    isFullScreen
                      ? "col-12 col-md-6 col-lg-5 col-xl-4 px-0 px-md-3"
                      : "col-12 col-md-8 px-0"
                  }  `}
                >
                  <Project
                    img={project6}
                    name="Global landing page"
                    codeLink="https://github.com/Aya-Saeed261/global-inc/tree/master"
                    liveLink="https://aya-saeed261.github.io/global-inc/"
                    tags={["React", "Bootstrap","HTML", "CSS", "JavaScript"]}
                  />
                </Col>
                <Col
                  className={`${
                    isFullScreen
                      ? "col-12 col-md-6 col-lg-5 col-xl-4 px-0 px-md-3"
                      : "col-12 col-md-8 px-0"
                  }  `}
                >
                  <Project
                    img={project1}
                    name="Ruper store"
                    codeLink="https://github.com/Aya-Saeed261/ruper-store/tree/master"
                    liveLink="https://aya-saeed261.github.io/ruper-store/"
                    tags={["Ecommerce", "React", "Bootstrap"]}
                  />
                </Col>
                <Col
                  className={`${
                    isFullScreen
                      ? "col-12 col-md-6 col-lg-5 col-xl-4 px-0 px-md-3"
                      : "col-12 col-md-8 px-0"
                  }  `}
                >
                  <Project
                    img={project2}
                    name="Where in the world"
                    codeLink="https://github.com/Aya-Saeed261/where-in-the-world/tree/master"
                    liveLink="https://aya-saeed261.github.io/where-in-the-world/"
                    tags={["React", "Bootstrap", "API"]}
                  />
                </Col>
                <Col
                  className={`${
                    isFullScreen
                      ? "col-12 col-md-6 col-lg-5 col-xl-4 px-0 px-md-3"
                      : "col-12 col-md-8 px-0"
                  }  `}
                >
                  <Project
                    img={project3}
                    name="Todo app"
                    codeLink="https://github.com/Aya-Saeed261/Frontend-Mentor-challenges/tree/main/intermediate/todo-app-main"
                    liveLink="https://imaginative-kringle-1ad620.netlify.app/"
                    tags={["HTML", "CSS", "JavaScript"]}
                  />
                </Col>
              </Row>
              <Button
                as="a"
                href="https://github.com/Aya-Saeed261?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="more-link d-block rounded-0 border-0 mx-auto"
              >
                More projects
              </Button>
            </Container>
          </main>
        </div>
      </Fade>
    </Draggable>
  );
};

export default ProjectsWindow;
