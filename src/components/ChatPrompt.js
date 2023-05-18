import {  useSelector } from "react-redux";
import * as React from 'react';
import { SkeletonTheme } from "react-loading-skeleton";
import ParagraphSkeleton from "./ParagraphSkeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import ScrollWrapper from "./ScrollWrapper";


const ChatPrompt = () => {
    const { response, loading } = useSelector((state) => {
        return {
            response: state.gpt.response,
            loading: state.gpt.loading,
        };
    });


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

