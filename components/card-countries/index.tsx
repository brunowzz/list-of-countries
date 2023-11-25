"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface PropsCard {
  countrieName: string;
  flag: string;
  altFlag: string;
  region?: string;
}

export default function CardCountries(props: PropsCard) {
  const { countrieName, flag, altFlag, region } = props;
  const params: string | any = useParams();

  const routing =
    params === countrieName ? `/${countrieName}` : `/countries/${countrieName}`;

  return (
    <div className="flex flex-col justify-between w-60 h-58 p-3 gap-1 mx-auto bg-white rounded-md hover:border-indigo-200 transition-all hover:shadow-xl">
      <Image
        className="bg-cover bg-no-repeat rounded w-60 h-32 object-cover"
        width={240}
        height={130}
        src={flag}
        alt={altFlag}
      />

      <span>
        <h2 className="text-black text-lg font-black">{countrieName}</h2>

        {region && (
          <p>
            <strong className="text-base text-black">Continente: </strong>
            {region}
          </p>
        )}
      </span>

      <Link href={`${routing}`}>
        <button className="w-full h-8 bg-gray-300 rounded-md text-base font-normal text-black cursor-pointer hover:bg-gray-200 transition-all">
          Ver informações
        </button>
      </Link>
    </div>
  );
}
