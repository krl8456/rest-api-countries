import { Link } from "react-router-dom";


interface countryProps {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

function Country({ flag, name, population, region, capital }: countryProps) {
  return (
    <Link
      to={`/${name.replace(/ /g, '')}`}
      className="flex flex-col shadow pb-12 hover:cursor-pointer text-black no-underline dark:text-white dark:bg-DarkBlue hover:-translate-y-4 ease-in-out duration-300"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <img src={flag} alt="flag" className="h-70 w-full md:h-52" />
      <h2 className="font-medium text-2xl m-6 dark:text-white">{name}</h2>
      <div className="ml-6 dark:text-white">
        <span className="font-medium">Population: </span>
        <span className="dark:opacity-80">{population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
      </div>
      <div className="ml-6 dark:text-white">
        <span className="font-medium">Region: </span>
        <span className="dark:opacity-80">{region}</span>
      </div>
      <div className="ml-6 dark:text-white">
        <span className="font-medium ">Capital: </span>
        <span className="dark:opacity-80">{capital}</span>
      </div>
    </Link>
  );
}

export default Country;
