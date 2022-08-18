import { Link } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";

export default function Navbar() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <nav className="drop-shadow-md h-32 w-full border-2 flex items-center md:h-16 dark:bg-DarkBlue dark:text-white dark:border-0">
      <Link
        to="/"
        className="font-bold ml-4 block text-lg md:ml-14 hover:cursor-pointer text-black no-underline dark:text-white"
      >
        <span className="dark:text-white">Where in the world?</span>
      </Link>
      <div
        className="flex items-center ml-auto hover:cursor-pointer"
        onClick={() => setTheme(colorTheme)}
      >
        {colorTheme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
        <span className="font-medium mr-8 ml-2 md:mr-14 md:font-small">
          Dark Mode
        </span>
      </div>
    </nav>
  );
}
