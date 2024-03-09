import type { Metadata } from "next";
import "./globals.css";
import { rubik } from "./fonts/fonts";
import Navbar from "./(common)/Navbar";
import Footer from "./(common)/Footer";

export const metadata: Metadata = {
	title: "Next14-Dockerized",
	description: "Dockerized Next 14 app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={rubik.variable}>
			<body
				className={`${rubik.className} flex flex-col justify-between min-h-dvh`}>
				<header className="bg-red-500/10 py-2 shadow-sm flex-shrink">
					<Navbar />
				</header>
				<div className="flex-1 ">{children}</div>
				<footer className="flex-shrink  bg-red-800 text-white py-2">
					<Footer />
				</footer>
			</body>
		</html>
	);
}
