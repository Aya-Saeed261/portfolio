// react-bootstrap
import { Button, Badge } from "react-bootstrap";

// Imported assets
import viewSite from "../../../../assets/icons/view-icon.png";
import viewCode from "../../../../assets/icons/code-icon.svg";

const Project = ({ img, name, codeLink, liveLink, tags }) => {
  return (
    <div className="project-holder shadow h-100">
      <div className="image-holder position-relative mb-3">
        <img src={img} alt="Project" className="img-fluid h-100 w-100 object-fit-cover" />
        <div className="links-holder position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center gap-4">
          <Button
            aria-label="View live site"
            as="a"
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="icon-btn"
          >
            <img src={viewSite} alt="View live site" className="img-fluid" />
          </Button>
          <Button
            aria-label="View code"
            as="a"
            href={codeLink}
            target="_blank"
            rel="noreferrer"
            className="icon-btn"
          >
            <img src={viewCode} alt="View code" className="img-fluid" />
          </Button>
        </div>
      </div>
      <div className="pb-3">
        <h2 className="fs-4 text-uppercase text-center">
          <a
            href={liveLink}
            className="name-link text-decoration-none"
          >
            {name}
          </a>
        </h2>
        <ul className="list-unstyled mb-0 d-flex justify-content-center flex-wrap gap-2 p-2">
          {tags.map((tag, indx) => (
            <li key={indx}>
              <Badge bg="dark" className="fw-normal">
                {tag}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
