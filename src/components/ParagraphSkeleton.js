import Skeleton from "react-loading-skeleton";

const ParagraphSkeleton = () => {
    return (
        <>
            <Skeleton borderRadius={"0.75rem"}  style={{width: '95%'}}/>
            <Skeleton borderRadius={"0.75rem"}  style={{width: '88%'}}/>
            <Skeleton borderRadius={"0.75rem"}  style={{width: '76%'}}/>
            <Skeleton borderRadius={"0.75rem"}  style={{width: '90%'}}/>
            <Skeleton borderRadius={"0.75rem"}  style={{width: '82%'}}/>
            <Skeleton borderRadius={"0.75rem"}  style={{width: '70%'}}/>
        </>
    );
};
export default ParagraphSkeleton;