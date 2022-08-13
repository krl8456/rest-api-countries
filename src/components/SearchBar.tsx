interface SearchBarProps {
  handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void
  searchInput: string
}

function SearchBar({ handleInputChange, searchInput }: SearchBarProps) {
  return (
      <input
        type="text"
        className="w-11/12 h-[60px] focus:outline-none inputText pl-24 shadow rounded mx-auto block mt-8 md:w-1/3 md:absolute md:left-20 md:top-24 md:m-0"
        placeholder="Search for a country..."
        name="searchInput"
        value={searchInput}
        onChange={handleInputChange}
      />
  );
}

export default SearchBar;
