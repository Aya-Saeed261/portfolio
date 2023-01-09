import { useState, useEffect } from "react";

// react bootstrap
import { Row, Col } from "react-bootstrap";

const LoadingScreen = () => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const startId = setTimeout(() => {
      setStart(true);
    }, 600);
    return () => clearTimeout(startId);
  }, []);

  return (
    <div className="loading-screen w-100 h-100 position-absolute start-0 top-0 bg-dark d-flex justify-content-center align-items-center">
      <div className="p-3">
        <p className="text-center text-white fs-3">Loading...</p>
        <div className="prog-holder border border-1 border-white position-relative">
          <span
            className={`prog ${
              start ? "start" : ""
            } h-100 position-absolute left-0 start-0`}
          ></span>
          <Row className="m-0 h-100 border border-4 border-dark">
            <Col className="h-100 border border-top-0 border-bottom-0 border-start-0 border-3 border-dark"></Col>
            <Col className="h-100 border border-top-0 border-bottom-0 border-3 border-dark"></Col>
            <Col className="h-100 border border-top-0 border-bottom-0 border-3 border-dark"></Col>
            <Col className="h-100 border border-top-0 border-bottom-0 border-3 border-dark"></Col>
            <Col className="h-100 border border-top-0 border-bottom-0 border-3 border-dark"></Col>
            <Col className="h-100 border border-top-0 border-bottom-0 border-3 border-dark"></Col>
            <Col className="h-100 border border-top-0 border-bottom-0 border-3 border-dark"></Col>
            <Col className="h-100 border border-top-0 border-bottom-0 border-3 border-dark"></Col>
            <Col className="h-100 border border-top-0 border-bottom-0 border-3 border-dark"></Col>
            <Col className="h-100 border border-top-0 border-bottom-0 border-3 border-dark"></Col>
            <Col className="h-100 border border-top-0 border-bottom-0 border-3 border-dark"></Col>
            <Col className="h-100 border border-top-0 border-bottom-0 border-3 border-dark"></Col>
            <Col className="h-100 border border-top-0 border-bottom-0 border-end-0 border-3 border-dark"></Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
