// react-bootstrap
import { Button, Row, Col } from "react-bootstrap";

const Tabs = ({ tabs, onMaximizeWindow }) => {
  return (
    <div className="tabs px-2 px-md-3 h-100 position-relative">
      <Row className="m-0 h-100">
        {tabs.map((tab) => (
          <Col key={tab.id} className="col-4 col-md-2 px-1 h-100">
            <Button
              className={`tab ${
                tab.minimized ? "" : "active-btn"
              } bg-transparent main-border w-100 h-100 rounded-0 text-body p-0`}
              aria-label={`${tab.name} tab`}
              onClick={() => onMaximizeWindow(tab.name, false)}
            >
              <img
                src={tab.icon}
                alt={`${tab.name} tab`}
                className={`img-fluid ${
                  tab.name === "contact" ? "mail-icon" : ""
                }`}
              />
            </Button>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Tabs;
