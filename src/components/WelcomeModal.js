import React, { useEffect, useState } from "react";

const WelcomeModal = () => {
  const [welcomeModal, setWelcomeModal] = useState(null);

  useEffect(() => {
    const modal = document.querySelector("#welcome-modal");
    setWelcomeModal(modal);
    modal.showModal();
  }, []);

const welcomeInfo = "Welcome to Calc-GPT! Here's how to use the app: \nUse the calculator as you normally would and get a result. \n Click the symbol to get"

  return (
    <dialog id="welcome-modal" className="welcome-modal">
      <div>{welcomeInfo}</div>
      <button className="welcome-modal-button" onClick={() => welcomeModal && welcomeModal.close()}>
        Let's go
      </button>
    </dialog>
  );
};

export default WelcomeModal;