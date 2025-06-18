import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-100 via-white to-white flex flex-col items-center justify-center px-6 text-center">
      
      <h1 className="text-4xl font-bold text-indigo-600 mb-2">Welcome to Bidzy</h1>
      <p className="text-gray-700 text-lg max-w-md mb-6">
        A vibrant auction marketplace for creators and collectors. Let your art shine or find your next favorite piece!
      </p>

      
      <Link href="/role">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-indigo-700 transition">
          Get Started
        </button>
      </Link>

    
      <div className="mt-10">
        <Image
          src="/bidzy_icon.png" 
          alt="Bidzy Mascot"
          width={160}
          height={160}
          className="rounded-full drop-shadow"
        />
      </div>
    </main>
  );
}
