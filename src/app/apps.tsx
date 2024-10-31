// src/app/Apps.tsx
import Image from "next/image";

export default function Apps() {
  return (
    <section className="mt-6 w-full max-w-4xl rounded-lg bg-gray-800 p-6 shadow-md">
      <h2 className="mb-4 text-center text-2xl font-semibold">Apps</h2>

      {/* Sparking Teams Subsection */}
      <div className="mb-8">
        <a
          href="https://github.com/decheverri123/Sparking-Teams/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 block text-center text-xl font-semibold text-blue-400 hover:text-blue-600"
        >
          Sparking Teams
        </a>
        <div className="grid grid-cols-5 gap-0">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="relative h-96 w-full">
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
        <h3 className="mb-4 text-center text-xl font-semibold">Meditatio</h3>
        <div className="grid grid-cols-5 gap-0">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="relative h-96 w-full">
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
