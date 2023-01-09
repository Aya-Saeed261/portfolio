// react-bootstrap
import { Button } from "react-bootstrap";

const MainIcon = ({ img, title, onOpenWindow }) => {
  return (
    <Button
      className="desktop-icon d-block text-center mb-4 border-0 bg-transparent p-0"
      onClick={onOpenWindow}
    >
      <img
        src={img}
        alt="user"
        className={`img-fluid ${title === "About me" ? "about-img" : ""}`}
      />
      <h2 className="fs-3 mb-0 lh-1 text-uppercase text-dark">{title}</h2>
    </Button>
  );
};

export default MainIcon;
