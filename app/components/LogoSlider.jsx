import Image from "next/image";

const LOGOS = [
  { name: "Coca-Cola", src: "/nopalito.png" },
  { name: "Disney", src: "/Disney.png" },
  { name: "Gymshark", src: "/fise.png" },
  { name: "Under Armour", src: "/puma.png" },
  { name: "Spotify", src: "/Shazam.png" },
  { name: "trip", src: "/trip.png" },
  { name: "sta", src: "/sta.png" },
  { name: "Coca-Cola", src: "/nb.png" }, // Added for extra length
];

export default function LogoSlider() {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      {/* 1. First set of logos */}
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {LOGOS.map((logo, index) => (
          <li key={index}>
            <img
              src={logo.src}
              alt={logo.name}
              width={150}
              height={50}
              className="object-contain" // Good practice to keep aspect ratio
            />
          </li>
        ))}
      </ul>

      {/* 2. Second set of logos (Fixed Typo Here) */}
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {LOGOS.map((logo, index) => (
          <li key={index}>
            {/* 👇 Fixed: Changed <image> to <img> */}
            <img
              src={logo.src}
              alt={logo.name}
              width={150}
              height={50}
              className="object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
