import Image from "next/image";

export function LogoMarquee({ logos }: { logos: { name: string; src: string }[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
      {logos.map((logo) => (
        <div key={logo.name} className="flex items-center gap-2 grayscale transition hover:grayscale-0">
          <Image src={logo.src} alt={logo.name} width={100} height={40} className="h-9 w-auto object-contain" />
        </div>
      ))}
    </div>
  );
}
