import { Roboto, Outfit, Inter } from "next/font/google";

export const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	display: "swap",
});

export const outfit = Outfit({
	subsets: ["latin"],
	display: "swap",
});

export const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});
