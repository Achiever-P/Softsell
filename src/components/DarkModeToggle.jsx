import { BsMoon, BsSun } from "react-icons/bs";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl ml-4 transition hover:scale-110"
        >
            {darkMode ? <BsSun className="text-yellow-300" /> : <BsMoon className="text-white" />}
        </button>
    );
};

export default DarkModeToggle;
