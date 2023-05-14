import { useDispatch, useSelector } from "react-redux";
import * as React from 'react';
import { useEffect } from "react";
import { setResponse, clearError, abortRequest } from "../store/slices/gptSlice";
import { SkeletonTheme } from "react-loading-skeleton";
import ParagraphSkeleton from "./ParagraphSkeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import ScrollWrapper from "./ScrollWrapper";


const ChatPrompt = () => {
    const { result, response, loading } = useSelector((state) => {
        return {
            result: state.buttons.result,
            response: state.gpt.response,
            loading: state.gpt.loading,
        };
    });

    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(abortRequest());
        dispatch(setResponse(''));
        dispatch(clearError());
    }, [result]);

const handleMouseOver = () =>{
    document.documentElement.style.setProperty('--scrollbar-color','rgba(93, 64, 114, 1)')
}
const handleMouseLeave = () =>{
    document.documentElement.style.setProperty('--scrollbar-color','rgba(93, 64, 114, 0.6)')
}

    // onMouseOver={} onMouseLeave={}
    return (
        <ScrollWrapper >
            <SkeletonTheme borderRadius={"0.75rem"} height={16} baseColor="#8f8f8f" highlightColor="#f7f7f7">
                <div className={response ? "chat-window-open scroll" : 'chat-window-open'}>
                    {loading ? <ParagraphSkeleton /> : response}
                </div>
            </SkeletonTheme>
        </ScrollWrapper>
    );
};
export default ChatPrompt;

