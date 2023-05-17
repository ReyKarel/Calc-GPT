const NavButton = ({  children, clickHandler, choice, selected }) => {
    const handleClick = (event) => {
        event.stopPropagation();
        clickHandler(choice);
    };

    //possibly change the outside click hook to ignore list of #ids as targets


    return (
        <button  className={`nav-button ${choice === selected && 'selected'}`} onClick={handleClick} >
            {children}
        </button>
    );
};
export default NavButton;