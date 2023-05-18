import Display from "./components/Display";
import CalcGrid from "./components/CalcGrid";
import NavBar from "./components/NavBar";
import { useEffect, useRef } from "react";
import { screens, setScreen } from "./store/slices/displaySlice";
import { useDispatch, useSelector } from "react-redux";
import { abortRequest, clearError, prompts, setAbortController, setError, setLoading, setResponse } from "./store/slices/gptSlice";
import WelcomeModal from "./components/WelcomeModal";
import { processChatGPTRequest } from "./components/api";
import useClickOutside from "./hooks/useClickOutside";
import useWindowSize from "./hooks/useWindowSize";


const App = () => {

    const dispatch = useDispatch();

    const { currentScreen, isLoading, currentNumber, result, prompt } = useSelector((state) => {
        return {
            currentScreen: state.display.currentScreen,
            isLoading: state.gpt.loading,
            currentNumber: state.buttons.currentNumber,
            result: state.buttons.result,
            prompt: prompts[state.gpt.prompt]
        };
    });

    const handleTabSelect = (tab) => {

        if (tab === currentScreen) {
            dispatch(setScreen('calculator'));
        } else {
            dispatch(setScreen(tab));
        }
    };



    let outputNumber = (result || currentNumber || "0");
    const handleGPT = async () => {
        const controller = new AbortController();
        dispatch(setAbortController(controller));
        dispatch(setLoading(true));
        try {
            const response = await processChatGPTRequest(prompt, outputNumber, controller);
            dispatch(setResponse(response || ''));
        } catch (error) {
            dispatch(setError(error.message));
            dispatch(setScreen('calculator'));

        } finally {
            dispatch(setLoading(false));
        }
    };

    useEffect(() => {
        if (isLoading) {
            dispatch(abortRequest());
            dispatch(setResponse(''));
            dispatch(clearError());
            dispatch(setScreen('calculator'));
        }
    }, [result, currentNumber]);

    useEffect(() => {
        if (isLoading) dispatch(abortRequest());
        else if (currentScreen === 'chat') {
            handleGPT();
        }
    }, [currentScreen]);

    const ref = useRef(null);

    const handleClickOutside = (event) => {
        const unwantedClasses = ['nav-button', 'nav-icon'];

        if (event.target.tagName === "path") {
            console.log('howdy')
        };


        if (ref.current && !ref.current.contains(event.target) &&
            (!event.target.classList || !unwantedClasses.some(className => event.target.classList.contains(className)))) {

            dispatch(setScreen('calculator'));
        }


    };

    useClickOutside(ref, handleClickOutside);

    const [height, width] = useWindowSize();
    height < 700 && document.documentElement.style.setProperty('--calc-button', `${height / 9}px`);


    return (
        <div className="app">
            <NavBar currentTab={currentScreen} onTabSelect={handleTabSelect} />
            <div className="calculator-grid ">
                <Display />
                <CalcGrid />
            </div>
            <WelcomeModal />

            {currentScreen !== 'calculator' &&
                <div ref={ref} className="overlay-card">
                    {screens[currentScreen]}
                </div>}

        </div>
    );
};
export default App;