import CardCountries from "@/components/card-countries";

export type Country = {
  name: {
    common: string;
  };

  translations: {
    por: {
      common: string;
    };
  };

  flags: {
    svg: string;
    alt: string;
  };

  capital?: string;
  region: string;
  subregion: string;
  population: number;
  languages?: {
    [key: string]: string;
  };

  borders?: string[];
  cca3: string;
};

async function getFullCountries(): Promise<Country[]> {
  const response: any = await fetch("https://restcountries.com/v3.1/all");

  return response.json();
}

export default async function Home() {
  const data = await getFullCountries();

  return (
    <section className="container w-full grid grid-cols-4 gap-3 py-4">
      {data.map((countries) => (
        <CardCountries
          key={countries.name.common}
          countrieName={countries.name.common}
          flag={countries.flags.svg}
          altFlag={countries.flags.alt}
          region={countries.region}
        />
      ))}
    </section>
  );
}
