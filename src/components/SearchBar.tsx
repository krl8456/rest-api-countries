interface SearchBarProps {
  handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void;
  searchInput: string;
  setInputData(value: React.SetStateAction<{
    searchInput: string;
    region: string;
}>): void;
}


function SearchBar({ handleInputChange, searchInput, setInputData }: SearchBarProps) {
  return (
    <div className="w-11/12 relative mx-auto block mt-8 md:w-1/3 md:absolute md:left-20 md:top-24 md:m-0">
      <input
        type="text"
        className="w-full h-[60px] focus:outline-none inputText pl-24 shadow rounded  dark:bg-DarkBlue"
        placeholder="Search for a country..."
        name="searchInput"
        value={searchInput}
        onChange={handleInputChange}
      />
      {searchInput && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 absolute right-12 bottom-1/2 translate-y-1/2 cursor-pointer"
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={() => setInputData(prev => ({...prev, searchInput: ""}))}
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
  );
}

export default SearchBar;
