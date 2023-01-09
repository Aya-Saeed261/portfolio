import { useState, useEffect } from "react";

// Imported components
import Desktop from "./desktop/desktop";
import Taskbar from "./taskbar/taskbar";
import Notification from "./notification";
import Credits from "./credits";
import LoadingScreen from "./loadingScreen";

const App = () => {
  const [showNotifi, setShowNotifi] = useState(false);
  const [notification, setNotification] = useState("");
  const [order, setOrder] = useState({ about: 1, projects: 2, contact: 3 });
  const [tabs, setTabs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [shutDown, setShutDown] = useState(false);

  const handleClosingNotifi = () => {
    setShowNotifi(false);
  };

  const handlwShowingNotifi = (msg) => {
    setNotification(msg);
    setShowNotifi(true);
  };

  const handleOrderChange = (window) => {
    const orderObj = { ...order };
    Object.keys(orderObj).forEach((key) => {
      if (key === window) {
        orderObj[key] = 3;
      } else {
        if (orderObj[key] === 3) {
          orderObj[key] = 2;
        } else if (orderObj[key] === 2) {
          orderObj[key] = 1;
        }
      }
    });
    setOrder(orderObj);
  };

  const handleNewTab = (icon, name) => {
    const oldTabs = [...tabs];
    const tabIndx = oldTabs.findIndex((tab) => tab.name === name);
    if (tabIndx !== -1) return;
    oldTabs.push({ icon, minimized: false, name });
    oldTabs.forEach((tab, indx) => (tab.id = indx));
    setTabs(oldTabs);
  };

  const handleRemoveTab = (name) => {
    const oldTabs = [...tabs];
    const tabIndx = oldTabs.findIndex((tab) => tab.name === name);
    oldTabs.splice(tabIndx, 1);
    oldTabs.forEach((tab, indx) => (tab.id = indx));
    setTabs(oldTabs);
  };

  const handleMinimizeWindow = (name, value) => {
    const oldTabs = [...tabs];
    const tabIndx = oldTabs.findIndex((tab) => tab.name === name);
    oldTabs[tabIndx].minimized = value;
    setTabs(oldTabs);
    if (!value) handleOrderChange(name);
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const resetStates = () => {
    setShowNotifi(false);
    setNotification("");
    setOrder({ about: 1, projects: 2, contact: 3 });
    setTabs([]);
    setShowModal(false);
    setShowLoading(true);
  };

  const handleShutDown = () => {
    setShutDown(true);
    setTimeout(() => {
      setShutDown(false);
      resetStates();
    }, 1000);
  };

  useEffect(() => {
    const loadingId = setTimeout(() => {
      setShowLoading(false);
    }, 2850);
    return () => clearTimeout(loadingId);
  }, [showLoading]);

  return showLoading ? (
    <LoadingScreen />
  ) : (
    <div className="flex-fill overflow-hidden d-flex flex-column">
      <Desktop
        onNotification={handlwShowingNotifi}
        onNewTab={handleNewTab}
        onRemoveTab={handleRemoveTab}
        onMinimizeWindow={handleMinimizeWindow}
        onOrderChange={handleOrderChange}
        order={order}
        tabs={tabs}
      />
      <Taskbar
        tabs={tabs}
        onMaximizeWindow={handleMinimizeWindow}
        onOpenModal={handleToggleModal}
        onShutDown={handleShutDown}
      />
      <Notification
        onClose={handleClosingNotifi}
        show={showNotifi}
        msg={notification}
      />
      <Credits show={showModal} onCloseModal={handleToggleModal} />
      <div
        className={`shut-down ${
          shutDown ? "show" : ""
        } position-absolute top-0 left-0 w-100 h-100`}
      ></div>
    </div>
  );
};

export default App;
