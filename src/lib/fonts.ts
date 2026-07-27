import {
  Outfit,
  Montserrat,
  Oswald,
  DM_Mono,
} from "next/font/google";

export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "900",
  variable: "--font-montserrat",
  display: "swap",
});

export const oswald = Oswald({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-oswald",
  display: "swap",
});

export const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-mono",
  display: "swap",
});

export const fontVariables = `${outfit.variable} ${montserrat.variable} ${oswald.variable} ${dmMono.variable}`;
