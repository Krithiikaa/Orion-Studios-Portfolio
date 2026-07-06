import Image from "next/image";

/**
 * Hero name lockup — a static, balanced branded graphic (no animation).
 * Centered and sized so the FULL 2:1 composition is always visible (never
 * cropped) and scales down cleanly across mobile → tablet → desktop.
 */
export default function HeroGraphic() {
  return (
    <div className="relative mx-auto aspect-[1214/625] w-full max-w-2xl sm:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
      <Image
        src="/hero.jpg"
        alt="Karthikeyan S — Creator"
        fill
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1152px"
        className="object-contain"
      />
    </div>
  );
}
