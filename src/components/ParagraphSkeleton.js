import Skeleton from "react-loading-skeleton";

const ParagraphSkeleton = () => {
    return (
        <>
            <Skeleton borderRadius={"0.75rem"} width={350} />
            <Skeleton borderRadius={"0.75rem"} width={335} />
            <Skeleton borderRadius={"0.75rem"} width={315} />
            <Skeleton borderRadius={"0.75rem"} width={345} />
            <Skeleton borderRadius={"0.75rem"} width={320} />
            <Skeleton borderRadius={"0.75rem"} width={310} />
        </>
    );
};
export default ParagraphSkeleton;