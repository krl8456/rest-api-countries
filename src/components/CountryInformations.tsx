import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
interface CountryInformationsProps {
  image: string;
  name: string;
  nativeName: native;
  population: number;
  region: string;
  subRegion: string;
  capital: string;
  topLevelDomain: string;
  currencies: currencies;
  languages: languages;
  borderCountries: Array<string>;
  countries: Array<any>;
}
interface native {
  country: {
    official: string;
    common: string;
  };
}
interface currencies {
  currency: {
    name: string;
    symbol: string;
  };
}
interface languages {
  lang: string;
}

function CountryInformations({
  image,
  name,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borderCountries,
  countries,
}: CountryInformationsProps) {
  return (
    <>
      <Link
        to="/"
        className="button-shadow flex justify-center items-center w-32 h-10 gap-2 ml-[5%] mt-12 dark:bg-DarkBlue text-black no-underline dark:!text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <p className="mt-2.5 opacity-80">Back</p>
      </Link>
      <div className="lg:grid lg:grid-cols-[1fr_1fr] lg:ml-[5%] lg:grid-row-1 relative">
        <img
          src={image}
          alt="flag"
          className="w-[90%] mx-auto mt-28 lg:mt-12 lg:w-auto"
        />
        <div className="lg:grid lg:grid-cols-[1fr_1fr] lg:py-20">
          <div className="lg:pl-12 flex flex-col pl-[5%]">
            <h2 className="mb-6 mt-12 lg:mt-0">{name}</h2>
            <p>
              <span className="font-semibold">Native name:</span>{" "}
              <span className="opacity-80">
                {Object.values(nativeName)[0].common}
              </span>
            </p>
            <p>
              <span className="font-semibold">Population: </span>
              <span className="opacity-80">
                {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </p>
            <p>
              <span className="font-semibold">Region: </span>
              <span className="opacity-80">{region}</span>
            </p>
            <p>
              <span className="font-semibold">Sub region: </span>
              <span className="opacity-80">{subRegion}</span>
            </p>
            <p>
              <span className="font-semibold">Capital: </span>
              <span className="opacity-80">{capital}</span>
            </p>
          </div>
          <div className="lg:flex flex-col pl-[5%] lg:mr-8">
            <p className="mt-8 lg:mt-16">
              <span className="font-semibold">Top Level Domain: </span>
              <span className="opacity-80">{topLevelDomain}</span>
            </p>
            <p>
              <span className="font-semibold">Currencies: </span>
              <span className="opacity-80">
                {Object.values(currencies)
                  .map((el) => el.name)
                  .join(", ")}
              </span>
            </p>
            <p>
              <span className="font-semibold">Languages: </span>
              <span className="opacity-80">{Object.values(languages).join(", ")}</span>
            </p>
          </div>
          <div className="lg:flex lg:col-span-2 pl-[5%] lg:pl-12">
            <h3 className="mt-8 lg:text-base whitespace-nowrap">
              Border Countries:
            </h3>
            <div className="flex gap-3 text-center mb-32 mt-8 flex-wrap lg:ml-4 max-h-8">
              {borderCountries ? (
                borderCountries.map((el) => (
                  <Link
                    key={uuidv4()}
                    className="px-4 py-1 border-2 text-black no-underline whitespace-nowrap dark:border-DarkBlue dark:bg-DarkBlue dark:!text-white opacity-80 hover:-translate-y-1 ease-in-out duration-300"
                    to={`/${countries
                      .find((c) => c.cca3 === el)
                      ?.name?.common.replace(/ /g, "")}`}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    {countries.find((c) => c.cca3 === el)?.name?.common}
                  </Link>
                ))
              ) : (
                <p>This country has no border countries</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryInformations;
