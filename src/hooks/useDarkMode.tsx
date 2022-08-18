import { useEffect, useState } from "react"


function useDarkMode() {
    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === "light" ? "dark" : "light";
    useEffect(() => {
        const root = window.document.documentElement;
        // if (theme === "light") {
        //     root.classList.remove("dark");
        //     return;    
        // }
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme)
    }, [theme, colorTheme])

    return [colorTheme, setTheme] as const;
}

export default useDarkMode