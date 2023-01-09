// Imported assets
import html from "../../../../assets/icons/html5.svg";
import css from "../../../../assets/icons/css3.svg";
import js from "../../../../assets/icons/javascript.svg";
import react from "../../../../assets/icons/reactjs.png";
import git from "../../../../assets/icons/git.svg";
import github from "../../../../assets/icons/github.svg";
import bootstrap from "../../../../assets/icons/bootstrap.svg";

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
    </ul>
  );
};

export default Skills;
