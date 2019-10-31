import { useLocalStorage } from './useLocalStorage';



const UseDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode');

    if (darkMode) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }

    return [darkMode, setDarkMode];
};

export default UseDarkMode;