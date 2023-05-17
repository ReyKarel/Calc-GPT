import { useDispatch, useSelector } from "react-redux";
import * as React from 'react';
import { useEffect } from "react";
import { setResponse, clearError, abortRequest, setAbortController, setLoading, setError } from "../store/slices/gptSlice";
import { SkeletonTheme } from "react-loading-skeleton";
import ParagraphSkeleton from "./ParagraphSkeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import ScrollWrapper from "./ScrollWrapper";
import { setScreen } from "../store/slices/displaySlice";
import { processChatGPTRequest } from "./api";


const ChatPrompt = () => {
    const { result, response, loading } = useSelector((state) => {
        return {
            result: state.buttons.result,
            response: state.gpt.response,
            loading: state.gpt.loading,
        };
    });

    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (loading) {
    //         dispatch(abortRequest());
    //         dispatch(setResponse(''));
    //         dispatch(clearError());
    //         dispatch(setScreen('calculator'))
    //     }
    // }, [result]);

    

    

    return (
        <ScrollWrapper >
            <SkeletonTheme borderRadius={"0.75rem"} height={16} baseColor="#8f8f8f" highlightColor="#f7f7f7">
                <div className={"chat-window-open scroll"}>
                    {loading ? <ParagraphSkeleton /> : response}
                </div>
            </SkeletonTheme>
        </ScrollWrapper>
    );
};
export default ChatPrompt;

