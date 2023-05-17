import React, { useEffect, useState } from "react";
import { SiOpenai } from "react-icons/si";
import {BsChatDots} from 'react-icons/bs'
import { SlInfo } from "react-icons/sl";


const WelcomeModal = () => {
  const [welcomeModal, setWelcomeModal] = useState(null);

  useEffect(() => {
    const modal = document.querySelector("#welcome-modal");
    setWelcomeModal(modal);
    modal.showModal();
    return ()=>{
      modal.close()
    }
  }, []);

const welcomeInfo = <p>Welcome to Calc-GPT!<br/><br/> Press the {<SiOpenai />} symbol to ask Chat-GPT about your result/current number. <br/><br/> Press <BsChatDots/> to choose the style of answer you get back.<br/><br/>If you need a reminder, press the info button <SlInfo/> </p>

  return (
    <dialog id="welcome-modal" className="welcome-modal">
      <div>{welcomeInfo}</div>
      <button className="welcome-modal-button" onClick={() => welcomeModal && welcomeModal.close()}>
        Let's Go!
      </button>
    </dialog>
  );
};

export default WelcomeModal;