const NavButton = ({  id, children, clickHandler, choice, selected }) => {
    const handleClick = (event) => {
        event.stopPropagation();
        clickHandler(choice);
    };


    return (
        <button id={id && id} className={`nav-button ${choice === selected && 'selected'}`} onClick={handleClick} >
            {children}
        </button>
    );
};
export default NavButton;