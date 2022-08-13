import { useEffect, useState } from "react";
import Country from "./components/Country";
import DropdownMenu from "./components/DropdownMenu";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import { v4 as uuidv4 } from "uuid";
import { MDBSpinner } from "mdb-react-ui-kit";

function App() {
  const [countries, setCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inputData, setInputData] = useState({
    searchInput: "",
  });

  // useEffect(() => {
  //   fetchData();
  // }, []);

  useEffect(() => {
    fetchData();
    // setCountries((prev) =>
    //   prev.filter(
    //     (el) =>
    //       el.name.common.toLowerCase().indexOf(inputData.searchInput) !== -1
    //   )
    // );
  }, [inputData.searchInput]);

  function fetchData() {
    setLoading(false);
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        if (res.ok) {
          setLoading(true);
          return res.json();
        } else throw res;
      })
      .then((data) =>
        setCountries(
          data.filter(
            (el: any) =>
              el.name.common.toLowerCase().indexOf(inputData.searchInput) !== -1
          )
        )
      )
      .catch((err) => setError(true));
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const countryComponents = countries.map((el) => (
    <Country
      key={uuidv4()}
      flag={el.flags.png}
      name={el.name.common}
      population={el.population}
      region={el.region}
      capital={el.capital}
    />
  ));
  return (
    <>
      <Navbar />
      <SearchBar
        handleInputChange={handleInputChange}
        searchInput={inputData.searchInput}
      />
      <DropdownMenu />
      {/* <MDBSpinner className="relative left-1/2" role="status" >
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner> */}
      {/* {error && <p className="text-red-600 block mx-auto">Check your internet connection</p>} */}
      {loading ? (
        <div className="px-8 grid mt-36 gap-8 md:gap-20 md:px-20 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {countryComponents}
        </div>
      ) : (
        <MDBSpinner className="absolute left-1/2 top-1/2" role="status">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      )}
    </>
  );
}

export default App;
