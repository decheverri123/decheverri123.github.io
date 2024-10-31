// src/app/Apps.tsx
import Image from "next/image";

export default function Apps() {
  return (
    <section className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-4xl mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Apps</h2>

      {/* Sparking Teams Subsection */}
      <div className="mb-8">
        <a
          href="https://github.com/decheverri123/Sparking-Teams/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold mb-4 text-center block hover:text-blue-400"
        >
          Sparking Teams
        </a>
        <div className="grid grid-cols-5 gap-0">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="relative w-full h-96">
              <Image
                src={`/assets/apps/sparking/0${num}.png`}
                alt={`Sparking Teams screenshot ${num}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Meditatio Subsection */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-center">Meditatio</h3>
        <div className="grid grid-cols-5 gap-0">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="relative w-full h-96">
              <Image
                src={`/assets/apps/meditatio/0${num}.png`}
                alt={`Meditatio screenshot ${num}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
