import { useDispatch, useSelector } from "react-redux";
import * as React from 'react';
import { useEffect } from "react";
import { setResponse, clearError, setLoading } from "../store/slices/gptSlice";
import  { SkeletonTheme } from "react-loading-skeleton";
import ParagraphSkeleton from "./ParagraphSkeleton";
import 'react-loading-skeleton/dist/skeleton.css';




const ChatPrompt = ({ prompt, className }) => {
    const result = useSelector((state) => {
        return state.buttons.result;
    });
    const response = useSelector((state) => {
        return state.gpt.response;
    });
    const loading = useSelector((state) => {
        return state.gpt.loading;
    });
    const abort = useSelector((state) => {
        return state.gpt.abort;
    });
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setResponse(''));
        dispatch(clearError());
        dispatch(setLoading(false));
    }, [result,abort]);





    return (
        <div >
            <SkeletonTheme borderRadius={"0.75rem"} height={16} baseColor="#8f8f8f" highlightColor="#f7f7f7">
                <div className={response || loading ? "chat-window-open" : ''}>
                    {loading ? <ParagraphSkeleton /> : response}
                </div>
            </SkeletonTheme>
        </div>
    );
};
export default ChatPrompt;

