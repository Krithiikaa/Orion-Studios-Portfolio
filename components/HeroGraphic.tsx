import Image from "next/image";

/**
 * Hero name lockup — a static, balanced branded graphic (no animation).
 * Full-bleed so it spans the whole device width and reads as large as possible.
 *   - Mobile (portrait): a taller square frame + object-cover zooms into the
 *     centered "Karthikeyan / Creator" lockup so it fills the screen and stays
 *     legible (the decorative side letters crop off the edges).
 *   - sm+ : the full 2:1 landscape graphic, shown in full via object-contain.
 */
export default function HeroGraphic() {
  return (
    <div className="relative left-1/2 aspect-square w-screen max-w-none -translate-x-1/2 sm:aspect-[1214/625]">
      <Image
        src="/hero.jpg"
        alt="Karthikeyan S — Creator"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center sm:object-contain"
      />
    </div>
  );
}
