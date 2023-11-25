import Image from "next/image";
import Link from "next/link";

import type { Country } from "@/app/page";
import CardCountries from "@/components/card-countries";

async function getCountryByName(name: string): Promise<Country> {
  const response: any = await fetch(`https://restcountries.com/v3.1/all`);

  const data: Country[] = await response.json();

  return data.find((country: Country) => country.name.common === name)!;
}

async function getCountryBordersByName(name: string) {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries: Country[] = await response.json();

  const country = countries.find(
    (country: Country) => country.name.common === name
  )!;

  return country.borders?.map((border) => {
    const borderCountry = countries.find((country) => country.cca3 === border)!;
    return {
      name: borderCountry.name.common,
      ptName: borderCountry.translations.por.common,
      flag: borderCountry.flags.svg,
      flagAlt: borderCountry.flags.alt,
    };
  });
}

export default async function Countrie({
  params: { name },
}: {
  params: { name: string };
}) {
  const country: any = await getCountryByName(decodeURI(name));
  const borderCountries = await getCountryBordersByName(decodeURI(name));
  const formatter = Intl.NumberFormat("en", { notation: "compact" });

  return (
    <section className="container py-7">
      <h1 className="text-center mb-2 text-5xl font-bold text-black md:text-3xl">
        {country.translations.por.common}
      </h1>

      <Link
        href="/"
        className="flex items-center text-base mb-2 font-normal text-black gap-1"
      >
        <Image src="/arrow-left.svg" width={24} height={24} alt="arrow left" />
        Voltar
      </Link>

      <article className="flex md:flex-row flex-col justify-between min-w-full p-10 bg-white rounded-xl">
        <div>
          {country?.capital?.length && (
            <h2 className="text-xl text-gray-800">
              <b>🏙️ Capital: </b>
              {country.capital}
            </h2>
          )}

          <h2 className="text-xl text-gray-800 mt-3">
            <b>🗺️ Continente: </b>
            {country.region} {country.subregion && `- ${country.subregion}`}
          </h2>

          <h2 className="text-xl text-gray-800 mt-3">
            <b>👨‍👩‍👧‍👦 População: </b>
            {formatter.format(country.population)}
          </h2>

          {country?.languages && (
            <h2 className="text-xl text-gray-800 mt-3">
              <b>🗣️ Línguas faladas: </b>

              {Object.values(country.languages).map((language: any) => (
                <span
                  key={language}
                  className="inline-block px-2 bg-indigo-700 mr-2 text-white text-sm rounded-full"
                >
                  {language}
                </span>
              ))}
            </h2>
          )}
        </div>

        <figure className="relative h-48 my-2 md:w-96 shadow-md md:order-last order-first ">
          <Image
            className="rounded-lg object-cover"
            src={country.flags.svg}
            alt={country.flags.alt}
            fill
          />
        </figure>
      </article>

      {borderCountries && (
        <>
          <h3 className="text-2xl font-bold mb-6">
            Países que fazem fronteira
          </h3>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full container gap-2">
            {borderCountries?.map((border: any) => (
              <CardCountries
                key={border.name}
                countrieName={border.name}
                flag={border.flag}
                altFlag={border.flagAlt}
              />
            ))}
          </section>
        </>
      )}
    </section>
  );
}
