import { useEffect, useState } from "react";

const useFitText = (elementId, maxFontSize, text, property) => {

  const [displayWidth, setDisplayWidth] = useState(0);

  const getLineLength = (text) => {
    let length = 0;
    if (typeof (text) === 'list') {
      for (let el of text) {
        if (el) {
          length += el.length;
        }
      }
    } else {
      if (typeof (text) === "string") {
        length += text.length;
      }
    }
    return Math.max(1, length);
  };
  useEffect(() => {
    const displayEl = document.getElementById(elementId).clientWidth;
    if (displayEl) {
      setDisplayWidth(displayEl);
      getLineLength(text);
    }
  }, []);
  let currentFontSize = displayWidth / getLineLength(text);
  while (maxFontSize > currentFontSize) {
    currentFontSize *= 0.98
    document.documentElement.style.setProperty(`${property}`, `${currentFontSize}px`);
  }

  
};
export default useFitText;