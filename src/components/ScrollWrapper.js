const ScrollWrapper = ({ children, className }) => {
    const handleMouseOver = () =>{
        document.documentElement.style.setProperty('--scrollbar-color','rgba(93, 64, 114, 1)')
    }
    const handleMouseLeave = () =>{
        document.documentElement.style.setProperty('--scrollbar-color','rgba(93, 64, 114, 0.6)')
    }
    
    return (
        <div onTouchStart={handleMouseOver} onTouchEnd={handleMouseLeave} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className={className}>
            {children}
        </div>
    );
};
export default ScrollWrapper;