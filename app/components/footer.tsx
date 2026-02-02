import Image from "next/image";
import Link from "next/link";
import logo from "../../public/aa12small.png";

export default function Footer() {
  return (
    <footer className="absolute w-full flex bottom-0 border-t-1 border-white p-2">
      <Link href={"/"}>
        <Image
          src={logo}
          alt="logo link"
          className="h-9 w-26 border-r-1 border-white pr-6 pl-4"
        />
      </Link>
      <nav className="text-4xl pl-8">
        <Link
          href={"/"}
          className="underline hover:text-red-600 duration-200 ease-in-out"
        >
          Home
        </Link>
        <Link
          href={"/index"}
          className="underline hover:text-red-600 duration-200 ease-in-out pl-6"
        >
          Index
        </Link>
      </nav>
    </footer>
  );
}
