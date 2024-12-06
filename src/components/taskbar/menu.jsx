import { useState } from "react";

// react-bootstrap
import { Dropdown } from "react-bootstrap";

const Menu = ({ onOpenCredits, onShutDown }) => {
  const [active, setActive] = useState(false);

  return (
    <Dropdown
      className="start-dropdown"
      autoClose="outside"
      drop="up"
      onToggle={() => setActive(!active)}
    >
      <Dropdown.Toggle
        className={`start-btn main-border ${
          active ? "active-btn" : ""
        } w-100 d-block fs-4 p-0 px-lg-5 py-2 lh-1 text-center text-uppercase text-body rounded-0 bg-transparent`}
      >
        Menu
      </Dropdown.Toggle>

      <Dropdown.Menu className="ps-3 gray-bg rounded-0">
        <Dropdown.Item
          as="a"
          href="https://drive.google.com/file/d/1bLGy8qclPfbHmDm-dbpHv5I4L9MV8zfp/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          My resume
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={onOpenCredits}>
          Credits
        </Dropdown.Item>
        <Dropdown.Divider className="mx-2" />
        <Dropdown.Item as="button" onClick={onShutDown}>
          Shut down
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Menu;
