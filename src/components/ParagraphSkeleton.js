import Skeleton from "react-loading-skeleton";

const ParagraphSkeleton = () => {
    return (
        <>
            <Skeleton borderRadius={"0.75rem"} width={375} />
            <Skeleton borderRadius={"0.75rem"} width={365} />
            <Skeleton borderRadius={"0.75rem"} width={335} />
            <Skeleton borderRadius={"0.75rem"} width={365} />
            <Skeleton borderRadius={"0.75rem"} width={355} />
            <Skeleton borderRadius={"0.75rem"} width={320} />
        </>
    );
};
export default ParagraphSkeleton;