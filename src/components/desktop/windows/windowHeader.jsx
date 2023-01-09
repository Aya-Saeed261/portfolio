// react-bootstrap
import { Button } from "react-bootstrap";

// Imported assets
import close from "../../../assets/icons/close-icon.svg";
import min from "../../../assets/icons/minimize-icon.svg";
import max from "../../../assets/icons/maximize-icon.svg";
import restore from "../../../assets/icons/restore-down-icon.svg";

const WindowHeader = ({
  title,
  img,
  onSizeToggle,
  isFullScreen,
  onCloseWindow,
  onMinimizeWindow,
}) => {
  return (
    <header className="window-header" aria-label="Window header">
      <div className="d-flex align-items-center justify-content-between">
        <h1 className="title handle fs-4 mb-0 py-2 px-2 flex-fill d-flex align-items-center gap-2">
          <img src={img} alt="" className="img-fluid" />
          <span>{title}</span>
        </h1>
        <div className="d-flex gap-2 pe-2">
          <Button
            aria-label="Minimize window"
            className="header-button d-flex align-items-center justify-content-center p-0 rounded-0 border-0"
            onClick={onMinimizeWindow}
          >
            <img src={min} alt="Minimize window" className="img-fluid" />
          </Button>
          <Button
            aria-label={`${isFullScreen ? "Restore down" : "Maximize window"}`}
            className="header-button d-flex align-items-center justify-content-center p-0 rounded-0 border-0"
            onClick={onSizeToggle}
          >
            <img
              src={isFullScreen ? restore : max}
              alt="Restore down"
              className="img-fluid"
            />
          </Button>
          <Button
            aria-label="Close"
            className="header-button close d-flex align-items-center justify-content-center p-0 rounded-0 border-0"
            onClick={onCloseWindow}
          >
            <img src={close} alt="Close" className="img-fluid" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default WindowHeader;
