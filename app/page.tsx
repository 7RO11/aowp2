import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-left p-12">
        <h1 className="text-6xl font-bold pb-4">
          Anarchy Online Weapon Pathing
        </h1>
        <Link
          href={"/builds"}
          className="text-5xl max-w-fit underline hover:text-red-600 duration-200 ease-in-out pt-4 pb-4"
        >
          Build List
        </Link>
        <Link
          href={"/profession-suggestions"}
          className="text-5xl max-w-fit underline hover:text-red-600 duration-200 ease-in-out pt-4 pb-4"
        >
          Profession Suggestions
        </Link>
      </div>
    </main>
  );
}
