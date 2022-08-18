import { useEffect, useState } from "react";
import Country from "./components/Country";
import DropdownMenu from "./components/DropdownMenu";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import { v4 as uuidv4 } from "uuid";
import { MDBSpinner } from "mdb-react-ui-kit";
import CountryInformations from "./components/CountryInformations";
import { Route, Routes } from "react-router-dom";

function App() {
  const [countries, setCountries] = useState<any[]>([]);
  const [fullCountriesCopy, setFullCountriesCopy] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inputData, setInputData] = useState({
    searchInput: "",
    region: "",
  });
  
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setInputData((prev) => ({
      ...prev,
      region: "",
    }));
    const countriesFiltered =
      inputData.searchInput === ""
        ? fullCountriesCopy
        : fullCountriesCopy.filter(
            (el) =>
              el.name.common
                .toLowerCase()
                .indexOf(inputData.searchInput.toLowerCase()) !== -1
          );
    setCountries(countriesFiltered);
  }, [inputData.searchInput]);

  useEffect(() => {
    if (inputData.region !== "") {
      const countriesFiltered = fullCountriesCopy.filter((el) => {
        if (inputData.region === "America") {
          return el.region === "Americas";
        }
        return el.region === inputData.region;
      });
      setCountries(countriesFiltered);
    }
  }, [inputData.region]);

  function fetchData() {
    setLoading(false);
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => {
        if (res.ok) {
          setLoading(true);
          return res.json();
        } else throw res;
      })
      .then((data) => {
        setCountries(data);
        setFullCountriesCopy(data);
      })
      .catch((err) => setError(true));
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log(inputData.region);
    
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

  const countriesRoutes = fullCountriesCopy.map(el => <Route key={uuidv4()} path={`/${el.name.common.replace(/ /g, '')}`} element={<CountryInformations image={el.flags.svg} name={el.name.common} nativeName={el.name.nativeName} population={el.population} region={el.region} subRegion={el.subregion} capital={el.capital} topLevelDomain={el.tld} currencies={el.currencies} languages={el.languages} borderCountries={el.borders} countries={fullCountriesCopy}/>}/>)


  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar
                handleInputChange={handleInputChange}
                searchInput={inputData.searchInput}
                setInputData={setInputData}
              />
              <DropdownMenu
                stateValue={inputData.region}
                handleInputChange={handleInputChange}
              />
              {loading ? (
                <div className="px-8 grid mt-36 gap-8 md:gap-20 md:px-20 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 pb-20">
                  {countryComponents}
                </div>
              ) : (
                <MDBSpinner className="absolute left-1/2 top-1/2" role="status">
                  <span className="visually-hidden">Loading...</span>
                </MDBSpinner>
              )}
              
            </>
          }
        />
      
      {countriesRoutes}
      </Routes>

      {/* <MDBSpinner className="relative left-1/2" role="status" >
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner> */}
      {/* {error && <p className="text-red-600 block mx-auto">Check your internet connection</p>} */}
    </>
  );
}

export default App;
