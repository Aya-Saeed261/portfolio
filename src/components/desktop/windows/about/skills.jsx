// Imported assets
import html from "../../../../assets/skills/html5.svg";
import css from "../../../../assets/skills/css3.svg";
import js from "../../../../assets/skills/javascript.svg";
import react from "../../../../assets/skills/reactjs.png";
import git from "../../../../assets/skills/git.svg";
import github from "../../../../assets/skills/github.svg";
import bootstrap from "../../../../assets/skills/bootstrap.svg";
import redux from "../../../../assets/skills/redux.png";
import nodejs from "../../../../assets/skills/nodejs.png";
import mongodb from "../../../../assets/skills/mongodb.png";

const Skills = () => {
  return (
    <ul className="skills list-unstyled d-flex flex-wrap gap-4 justify-content-center">
      <li className="position-relative overflow-hidden">
        <img src={html} alt="HTML logo" className="img-fluid" />
      </li>
      <li className="position-relative overflow-hidden">
        <img src={css} alt="CSS logo" className="img-fluid" />
      </li>
      <li className="position-relative overflow-hidden">
        <img src={js} alt="CSS logo" className="img-fluid" />
      </li>
      <li className="position-relative overflow-hidden">
        <img src={bootstrap} alt="Bootstrap logo" className="img-fluid" />
      </li>
      <li className="position-relative overflow-hidden">
        <img src={git} alt="Git logo" className="img-fluid" />
      </li>
      <li className="position-relative overflow-hidden">
        <img src={github} alt="Github logo" className="img-fluid" />
      </li>
      <li className="position-relative overflow-hidden">
        <img src={react} alt="React logo" className="img-fluid" />
      </li>
      <li className="position-relative overflow-hidden">
        <img src={redux} alt="Redux logo" className="img-fluid" />
      </li>
      <li className="position-relative overflow-hidden">
        <img src={nodejs} alt="NodeJS logo" className="img-fluid" />
      </li>
      <li className="position-relative overflow-hidden">
        <img src={mongodb} alt="MongoDB logo" className="img-fluid" />
      </li>
    </ul>
  );
};

export default Skills;
