export default function Navbar() {
  return (
    <nav className="drop-shadow-md h-32 w-full border-2 flex items-center md:h-16">
      <h2 className="font-bold ml-4 block text-lg md:ml-14 hover:cursor-pointer">
        Where in the world?
      </h2>
      <div className="flex items-center ml-auto hover:cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-auto"
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
        <span className="font-medium mr-8 ml-2 md:mr-14 md:font-small">
          Dark Mode
        </span>
      </div>
    </nav>
  );
}
