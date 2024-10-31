// src/app/apps/sparking-teams/page.tsx
import Image from "next/image";

export default function SparkingTeams() {
  return (
    <div className="min-h-screen bg-gray-900 p-8 text-gray-300">
      <h1 className="mb-8 text-4xl font-semibold text-yellow-400">
        Sparking Teams
      </h1>
      <p className="mb-6">Description of Sparking Teams project goes here...</p>
      <div className="grid grid-cols-5 gap-0">
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num} className="relative h-96">
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
  );
}
