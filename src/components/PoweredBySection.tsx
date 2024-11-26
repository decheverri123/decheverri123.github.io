import Image from "next/image";

export default function PoweredBySection() {
  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <h3 className="text-lg font-semibold text-secondary">Powered by:</h3>
      <div className="flex items-center gap-4">
        <Image
          src="/next.webp"
          alt="Next.js Logo"
          width={70}
          height={70}
          className="object-contain"
        />
        <Image
          src="/tailwind.png"
          alt="Tailwind Logo"
          width={70}
          height={70}
          className="object-contain"
        />
        <Image
          src="/daisy.svg"
          alt="Daisy UI Logo"
          width={110}
          height={110}
          className="object-contain"
        />
      </div>
    </div>
  );
}
