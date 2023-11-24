import Image from "next/image";

interface PropsCard {
  countrieName: string;
  flag: string;
  altFlag: string;
  region: string;
}

export default function CardCountries(props: PropsCard) {
  const { countrieName, flag, altFlag, region } = props;

  return (
    <div className="flex flex-col justify-between w-60 h-58 p-3 gap-1 mx-auto bg-white rounded-md">
      <Image
        className="bg-cover bg-no-repeat rounded w-60 h-32"
        width={240}
        height={130}
        src={flag}
        alt={altFlag}
      />

      <span>
        <h2 className="text-bold font-black">{countrieName}</h2>

        <p>
          <strong className="text-bold">Continente: </strong>
          {region}
        </p>
      </span>

      <button className="w-full h-8 bg-gray-300 rounded-md text-base font-normal">
        Ver informações
      </button>
    </div>
  );
}
