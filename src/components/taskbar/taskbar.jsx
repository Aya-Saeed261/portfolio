// react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

// Imported components
import Clock from "./clock";
import Menu from "./menu";
import Tabs from "./tabs";

const Taskbar = ({ tabs, onMaximizeWindow, onOpenCredits, onShutDown }) => {
  return (
    <footer className="taskbar py-2 position-relative">
      <Container fluid>
        <Row className="m-0">
          <Col className="col-3 col-md-2 px-0">
            <Menu onOpenCredits={onOpenCredits} onShutDown={onShutDown} />
          </Col>
          <Col className="col-6 col-md-8">
            <Tabs tabs={tabs} onMaximizeWindow={onMaximizeWindow} />
          </Col>
          <Col className="col-3 col-md-2 px-0 align-self-center">
            <Clock />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Taskbar;
