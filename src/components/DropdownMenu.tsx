import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface DropdownMenuProps {
  stateValue: string;
  handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

function DropdownMenu({ stateValue, handleInputChange }: DropdownMenuProps) {
  const [isSelectBarClicked, setIsSelectBarClicked] = useState(false);
  const countries = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const selectRef = useRef<HTMLDivElement>(null);

  const toggleSelect = () => {
    setIsSelectBarClicked((prev) => !prev);
  };
  useEffect(() => {
    const hideDropDown = (e: any) => {
      if (e.path[1] !== selectRef.current) {
        setIsSelectBarClicked(false);
      }
    };

    document.body.addEventListener("click", hideDropDown);

    return () => document.body.removeEventListener("click", hideDropDown);
  }, []);

  return (
    <div
      ref={selectRef}
      className="relative mt-12 ml-[4.1666665%] h-[60px] w-56 bg-white shadow md:absolute md:right-20 md:mb-10 md:top-24 md:m-0 hover:cursor-pointer"
      onClick={toggleSelect}
    >
      <p className="h-full my-auto relative top-1/2 -translate-y-1/4 ml-6">
        {stateValue === "" ? "Filter by region" : stateValue}
      </p>
      {isSelectBarClicked && (
        <div className="mt-2 flex flex-col bg-white shadow rounded pl-6 box-border py-6 gap-3 ">
          {countries.map((country) => (
            <div key={uuidv4()} className="flex">
              <label
                htmlFor={country}
                className="cursor-pointer hover:text-gray-500 hover:cursor-pointer w-full"
              >
                {country}
                <input
                  type="radio"
                  name="region"
                  id={country}
                  className=""
                  value={country}
                  checked={stateValue === country}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          ))}
        </div>
      )}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 absolute top-1/2 -translate-y-1/2 right-6 pointer-events-none"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}

export default DropdownMenu;
