import Image from "next/image";
import aboutPortrait from "@/assets/shereem about me.png";
import heroPortrait from "@/assets/shereen hero.png";

type PortraitArtworkProps = {
  variant: "hero" | "about";
};

const portraitAssets = {
  hero: {
    src: heroPortrait,
    alt: "Shereen Mokone, front-end and CMS developer",
    sizes: "(max-width: 620px) 80vw, (max-width: 860px) 40vw, 480px",
  },
  about: {
    src: aboutPortrait,
    alt: "Shereen Mokone seated in a chair, with web development skills",
    sizes: "(max-width: 620px) 80vw, (max-width: 860px) 40vw, 460px",
  },
} as const;

export function PortraitArtwork({ variant }: PortraitArtworkProps) {
  const portrait = portraitAssets[variant];

  return (
    <Image
      alt={portrait.alt}
      className={`portrait-artwork portrait-artwork--${variant}`}
      priority={variant === "hero"}
      sizes={portrait.sizes}
      src={portrait.src}
    />
  );
}
