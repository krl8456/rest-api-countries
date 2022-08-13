import { useEffect, useRef, useState } from "react";
import React from "react";


function DropdownMenu() {

  const [isSelectBarClicked, setIsSelectBarClicked] = useState(false);
  const countries = ["africa", "america", "asia", "europe", "oceania"];
  const selectRef = useRef<HTMLDivElement>(null);

  const toggleSelect = () => {
    setIsSelectBarClicked(prev => !prev);
  }
  useEffect(() => {
    const hideDropDown = (e: any) => {
      if (e.path[1] !== selectRef.current) {
        setIsSelectBarClicked(false);
      }
    }

    document.body.addEventListener('click', hideDropDown)

    return () => document.body.removeEventListener('click', hideDropDown)
  }, [])

  return (
    <div ref={selectRef} className="relative mt-12 ml-[4.1666665%] h-[60px] w-56 bg-white shadow md:absolute md:right-20 md:mb-10 md:top-24 md:m-0" onClick={toggleSelect}>
        <p className="h-full my-auto relative top-1/2 -translate-y-1/4 ml-6" onClick={e => {}}>Filter by region</p>
        {
          isSelectBarClicked &&
          <div className="mt-2 flex flex-col bg-white shadow rounded pl-6 box-border py-6 gap-3 pointer-events-none">
          {countries.map(country => <>
            <input type="radio" name="country" id={country} className="hidden"/>
            <label htmlFor={country} className="first-letter:uppercase cursor-pointer hover:text-gray-500 hover:bg-gray-500">{country}</label>
          </>)}
        </div>  
        }
        
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
