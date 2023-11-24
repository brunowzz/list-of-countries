import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-white h-16 flex items-center justify-center">
      <figure className="container flex items-center gap-3">
        <Image
          width={48}
          height={48}
          src="/logo.svg"
          alt="Logo da lista de países - Globo"
        />

        <Link href="/">
          <h1 className="font-bold text-2xl">Lista de Países</h1>
        </Link>
      </figure>
    </nav>
  );
}
