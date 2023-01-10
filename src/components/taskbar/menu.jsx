import { useState } from "react";

// react-bootstrap
import { Dropdown } from "react-bootstrap";

const Menu = ({ onOpenModal, onShutDown }) => {
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
          href="https://drive.google.com/file/d/1cqoNdtz4Up0sEXKEQDY5iN4lVq4ozzc-/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Download my CV
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={onOpenModal}>
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
