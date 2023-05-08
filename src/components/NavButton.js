const NavButton = ({ children, clickHandler, choice, selected }) => {
    return (
            <button className={`nav-button ${choice === selected ? 'selected' : ''}`} onClick={() => clickHandler(choice)} >
                {children}
            </button>
    );
};
export default NavButton;