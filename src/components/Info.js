import { SlInfo } from 'react-icons/sl';
import { useState } from 'react';
    const [showInfo, setShowInfo] = useState(false);
    const handleInfoClick = () => {
        setShowInfo(!showInfo);
        setShowPrompts(false)
    };
    const info = "Welcome to Calc-GPT! Use the calculator as normal. Then, when you have a result, click the OpenAI icon that appears in the calculator display to ask Chat-GPT about that number. You can also click the chat bubble button that appears here to change the style of answer you get back from ChatGPT. Enjoy!";
