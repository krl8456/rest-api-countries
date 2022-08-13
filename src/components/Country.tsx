interface countryProps {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

function Country({ flag, name, population, region, capital }: countryProps) {
  return (
    <div className="flex flex-col shadow pb-12 hover:cursor-pointer">
      <img src={flag} alt="flag" className="h-40 w-full"/>
      <h2 className="font-medium text-2xl m-6">{name}</h2>
      <div className="ml-6">
        <span className="font-medium">Population: </span>
        <span>{population}</span>
      </div>
      <div className="ml-6">
        <span className="font-medium">Region: </span>
        <span>{region}</span>
      </div>
      <div className="ml-6">
        <span className="font-medium ">Capital: </span>
        <span>{capital}</span>
      </div>
    </div>
  );
}

export default Country;
