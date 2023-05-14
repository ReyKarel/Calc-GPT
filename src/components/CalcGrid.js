import CalcButton from "./CalcButton";
const CalcGrid = () => {
    return (
        <>
            <CalcButton>AC</CalcButton> 
            <CalcButton>DEL</CalcButton>
            <CalcButton operation={'+'}>+</CalcButton>
            <CalcButton digit={'7'}></CalcButton>
            <CalcButton digit={'8'}></CalcButton>
            <CalcButton digit={'9'}></CalcButton>
            <CalcButton operation={'-'}>-</CalcButton>
            <CalcButton digit={'4'}></CalcButton>
            <CalcButton digit={'5'}></CalcButton>
            <CalcButton digit={'6'}></CalcButton>
            <CalcButton operation={'*'}>×</CalcButton>
            <CalcButton digit={'1'}></CalcButton>
            <CalcButton digit={'2'}></CalcButton>
            <CalcButton digit={'3'}></CalcButton>
            <CalcButton operation={'/'}>÷</CalcButton>
            <CalcButton>.</CalcButton>
            <CalcButton digit={'0'}></CalcButton>
            <CalcButton>=</CalcButton>
        </>
    );
};
export default CalcGrid;